import { NextResponse } from 'next/server';
import { firestoreAdmin } from '@/config/firebaseAdmin';

export async function POST(req: Request) {
  const { id, data } = await req.json(); 

  try {
    const docRef = firestoreAdmin.collection('email-posts').doc(id);
    await docRef.set(data);

    return NextResponse.json({ message: 'Post created successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating post', error: error }, { status: 500 });
  }
}
