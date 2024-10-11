// src/config/firebase.ts
import admin from 'firebase-admin';
import serviceAccount from '@/root/jabbar-main-service.json'; 


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount), // Type assertion
  });
}
