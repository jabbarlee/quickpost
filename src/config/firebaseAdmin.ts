
import admin from 'firebase-admin';
import serviceAccount from '@/root/jabbar-main-service.json'; 


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount), 
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

const firestoreAdmin = admin.firestore();
export { firestoreAdmin };