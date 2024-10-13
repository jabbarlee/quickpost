import React from 'react'
import styles from './index.module.css'
import Input from '@/components/ui/Input'
import RecipientsList from '../RecipientsList'
import Button from '@/components/ui/Button'

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

  return (
    <div>
        <div className={styles.container}>
            <Input 
                placeholder='Recipient email' 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            { recipient ? 
                <Button 
                    buttonType="primary" 
                    onClick={() => {
                        setRecipients([...recipients, recipient])
                        setRecipient('')
                    }}
                >
                    Add
                </Button> 
                    : 
                null 
            }
            <RecipientsList recipientsList={recipients} />
        </div>
    </div>
  )
}
 