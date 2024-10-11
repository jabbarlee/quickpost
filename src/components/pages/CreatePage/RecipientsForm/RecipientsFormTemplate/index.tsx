"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function index({ id }: { id: string } ) {
    const [recipients, setRecipients] = useState<string[]>([]);
    const [recipient, setRecipient] = useState('');

    const handleClick = ( recipient: string) => {
        setRecipients([...recipients, recipient])
        setRecipient('')
    }

  return (
    <div>
        <div className={styles.container}>
            <Input 
                placeholder='Recipient email' 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <Button 
                buttonType='primary' 
                onClick={() => handleClick(recipient)}
            >
                Add
            </Button>
            {recipients.length > 0 && (
                <Button buttonType='secondary'>Save & Continue</Button>
            )}
        </div>
        <div>
            <ul>
                {recipients.map((recipient, index) => (
                    <li key={index}>
                        {recipient}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
 