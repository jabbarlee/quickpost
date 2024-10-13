"use client"

import React, { useState } from 'react'
import PostForm from '@/components/pages/CreatePage/PostForm'
import RecipientsForm from '@/components/pages/CreatePage/RecipientsForm'
import Button from '@/components/ui/Button'
import styles from './index.module.css'
import { useRouter } from 'next/navigation'

export default function index({ 
  id,
}: { 
  id: string 
}) {
  const router = useRouter()
  const [recipients, setRecipients] = useState<string[]>([])
  const [recipient, setRecipient] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [subject, setSubject] = useState<string>('')

  const handleSubmit = async () => {
        try {
            //firebase
            const response = await fetch('/api/firebase/update/template', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, subject, body, recipients }),
            });

            if (!response.ok) {
                throw new Error('Error creating post');
            }

            const result = await response.json();

            //redirect if success
            console.log('Success:', result);

        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className={styles.container}>
        <PostForm 
          subject={subject} 
          body={body} 
          setSubject={setSubject} 
          setBody={setBody}
          className={styles.form1}
        />
        <RecipientsForm 
          recipients={recipients} 
          setRecipients={setRecipients} 
          recipient={recipient} 
          setRecipient={setRecipient}
          className={styles.form2}
        />
        <Button 
          buttonType="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
    </div>
  )
}

