import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/actions/sendEmail';

export async function POST(req: NextRequest) {
  try {
    const { subject, body, recipients } = await req.json();

    await sendEmail( subject, body, recipients);

    // Return a success response
    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}
