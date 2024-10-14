import admin from 'firebase-admin';
import { google } from 'googleapis';
import serviceAccount from '@/root/jabbar-main-service.json'; 

interface ExtendedServiceAccount extends admin.ServiceAccount {
  client_email: string;
  private_key: string;
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ExtendedServiceAccount), 
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

// Create a function to send email using Gmail API
export async function sendEmail(to: string, subject: string, body: string) {
  const { client_email, private_key } = serviceAccount as ExtendedServiceAccount;

  const jwtClient = new google.auth.JWT(
    client_email,
    undefined,
    private_key.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/gmail.send']
  );

  // Authorize the client
    await jwtClient.authorize();

    const gmail = google.gmail({ version: 'v1', auth: jwtClient });

    const email = [
        `To: ${to}`,
        `Subject: ${subject}`,
        'Content-Type: text/plain; charset="UTF-8"',
        'MIME-Version: 1.0',
        '',
        body,
    ].join('\n');

    const encodedEmail = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Send the email
    await gmail.users.messages.send({
        userId: 'me', // Set to 'me' for the authenticated user or specify an email for another user
        requestBody: {
            raw: encodedEmail,
        },
    });
}