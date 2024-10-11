import { db } from '../../config/firebase';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  QuerySnapshot,
  DocumentData
} from 'firebase/firestore';

// Function to add a new document to a Firestore collection
export async function addDocument(collectionName: string, data: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
}

// Function to update an existing document
export async function updateDocument(collectionName: string, docId: string, data: any) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log('Document updated');
  } catch (error) {
    console.error('Error updating document: ', error);
    throw error;
  }
}

// Function to set a document (overwrite or create if it doesn't exist)
export async function setDocument(collectionName: string, docId: string, data: any) {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, data);
    console.log('Document set');
  } catch (error) {
    console.error('Error setting document: ', error);
    throw error;
  }
}

// Function to delete a document
export async function deleteDocument(collectionName: string, docId: string) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log('Document deleted');
  } catch (error) {
    console.error('Error deleting document: ', error);
    throw error;
  }
}

// Function to fetch a single document by ID
export async function getDocument(collectionName: string, docId: string) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document: ', error);
    throw error;
  }
}

// Function to fetch all documents from a collection
export async function getAllDocuments(collectionName: string): Promise<DocumentData[]> {
  try {
    const querySnapshot: QuerySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching documents: ', error);
    throw error;
  }
}
