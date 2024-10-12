import { NextResponse } from 'next/server';
import { db as firestore } from '@/config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req: Request) {  
  try {
    const data = await req.json();
    const { id, recipients } = data;

    if (!id) {
      return NextResponse.json({ error: 'Document ID is required' }, { status: 400 });
    }

    // Update the document
    const docRef = doc(firestore, 'email-posts', id);
    await setDoc(docRef, {
      recipients,
      updatedAt: new Date(), 
    }, { merge: true }); 

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('Error updating document: ', error);
    return NextResponse.json({ success: false, error: 'Error updating document' }, { status: 500 });
  }
}
