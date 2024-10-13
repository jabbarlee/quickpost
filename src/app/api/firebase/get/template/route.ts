import { NextResponse } from 'next/server';
import { db as firestore } from '@/config/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req: Request) {  
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Document ID is required' }, { status: 400 });
    }

    const docRef = doc(firestore, 'email-posts', id); 

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ success: false, error: 'Document not found' }, { status: 404 });
    }

    // Return the document data
    return NextResponse.json({ success: true, data: docSnap.data() });
  } catch (error) {
    console.error('Error fetching document: ', error);
    return NextResponse.json({ success: false, error: 'Error fetching document' }, { status: 500 });
  }
}
