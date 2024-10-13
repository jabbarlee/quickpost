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
        <div className={styles.section}>
            <h4 className={styles.heading}>Subject</h4>
            <p className={styles.content}>{subject}</p>
        </div>

        <div className={styles.section}>
            <h4 className={styles.heading}>Body</h4>
            <p className={styles.content}>{body}</p>
        </div>

        <div className={styles.section}>
            <h4 className={styles.heading}>Recipients</h4>
            <p className={styles.content}>
                {recipients.map((recipient, index) => (
                    <span key={index} className={styles.recipient}>{recipient}{index < recipients.length - 1 ? ', ' : ''}</span>
                ))}
            </p>
        </div>

        <div className={styles.section}>
            <p className={styles.id}><strong>ID:</strong> {id}</p>
        </div>
    </div>
  )
}
