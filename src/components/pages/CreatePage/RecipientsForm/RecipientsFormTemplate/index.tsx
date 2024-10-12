"use client"

import React, { useState } from 'react'
import styles from './index.module.css'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import RecipientsList from '../RecipientsList'
import { useRouter } from 'next/navigation'

export default function index({ id }: { id: string } ) {
    const router = useRouter();

    const [recipients, setRecipients] = useState<string[]>([]);
    const [recipient, setRecipient] = useState('');

    const handleClick = async ( recipient: string) => {
        //client side
        setRecipients([...recipients, recipient])
        setRecipient('')
    }

    const handleSubmit = async () => {
        try {
            //firebase
            const response = await fetch('/api/firebase/update/recipient', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, recipients }),
            });

            if (!response.ok) {
                throw new Error('Error creating post');
            }

            const result = await response.json();

            //redirect if success
            console.log('Success:', result);
            router.push(`/create/final/${id}`)

        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div>
        <div className={styles.container}>
            <Input 
                placeholder='Recipient email' 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <div className={styles.buttonContainer}>
                <Button 
                    buttonType='primary' 
                    onClick={() => handleClick(recipient)}
                >
                    Add
                </Button>
                {recipients.length > 0 && (
                    <Button 
                        buttonType='secondary'
                        onClick={handleSubmit}
                    >
                        Save & Continue
                    </Button>
                )}
            </div>
        </div><br/>
        <RecipientsList recipientsList={recipients} />
    </div>
  )
}
 