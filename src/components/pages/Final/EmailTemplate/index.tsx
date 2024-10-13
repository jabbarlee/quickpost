"use client"

import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import fetchTemplate from '@/actions/fetchTemplate'

export default function index({ id } : { id: string }) {
    const [subject, setSubject] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [recipients, setRecipients] = useState<string[]>([])

    useEffect(() => {
        fetchTemplate({
            id,
            setSubject,
            setBody,
            setRecipients
        })
    }, [])

  return (
    <div className={styles.container}>
        <h4>Subject: {subject}</h4>
        <h4>Body: {body}</h4>
        <h4>Recipients: {recipients.map((recipient, index) => <span key={index}>{recipient}, </span>)}</h4>
        <h6>id: {id}</h6>
    </div>
  )
}
