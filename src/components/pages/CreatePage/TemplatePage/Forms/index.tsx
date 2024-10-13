"use client"

import React, { useState } from 'react'
import PostForm from '@/components/pages/CreatePage/PostForm'
import RecipientsForm from '@/components/pages/CreatePage/RecipientsForm'
import Button from '@/components/ui/Button'
import styles from './index.module.css'
import { useRouter } from 'next/navigation'
import submitFormToFirebase from '@/actions/submitFormToFirebase'

export default function index({ 
  id,
}: { 
  id: string 
}) {
  const [recipients, setRecipients] = useState<string[]>([])
  const [recipient, setRecipient] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [subject, setSubject] = useState<string>('')

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
          onClick={() => {
            submitFormToFirebase({ 
              id, 
              recipients, 
              body, 
              subject,
              setRecipients,
              setRecipient,
              setBody,
              setSubject
            })
          }}
        >
          Submit
        </Button>
    </div>
  )
}

