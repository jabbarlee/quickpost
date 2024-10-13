import React from 'react'
import styles from './index.module.css'
import Input from '@/components/ui/Input'
import RecipientsList from '../RecipientsList'

export default function index({ 
    recipient, 
    setRecipient, 
    recipients, 
    setRecipients,
} : {
    recipient: string,
    setRecipient: React.Dispatch<React.SetStateAction<string>>,
    recipients: string[],
    setRecipients: React.Dispatch<React.SetStateAction<string[]>>
}) {
    // const handleSubmit = async () => {
    //     try {
    //         //firebase
    //         const response = await fetch('/api/firebase/update/recipient', {
    //             method: 'POST',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ id, recipients }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Error creating post');
    //         }

    //         const result = await response.json();

    //         //redirect if success
    //         console.log('Success:', result);
    //         router.push(`/create/final/${id}`)

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

  return (
    <div>
        <div className={styles.container}>
            <Input 
                placeholder='Recipient email' 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
        </div><br/>
        <RecipientsList recipientsList={recipients} />
    </div>
  )
}
 