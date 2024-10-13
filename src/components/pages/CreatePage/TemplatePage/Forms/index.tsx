"use client"

import React, { useState } from 'react'
import PostForm from '@/components/pages/CreatePage/PostForm'
import RecipientsForm from '@/components/pages/CreatePage/RecipientsForm'
import Button from '@/components/ui/Button'
import styles from './index.module.css'

export default function index({ id }: { id: string }) {

  const [recipients, setRecipients] = useState<string[]>([])
  const [recipient, setRecipient] = useState<string>('')
  const [postTemplate, setPostTemplate] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [error, setError] = useState<string>('')

  return (
    <div className={styles.container}>
        <PostForm 
          subject={subject} 
          body={postTemplate} 
          setSubject={setSubject} 
          setBody={setPostTemplate}
          className={styles.form1}
        />
        <RecipientsForm 
          recipients={recipients} 
          setRecipients={setRecipients} 
          recipient={postTemplate} 
          setRecipient={setSubject}
          className={styles.form2}
        />
        <Button 
          buttonType="primary"
        >
          Submit and send
        </Button>
    </div>
  )
}
