import React from 'react'
import Recipient from '@/components/ui/Recipient'
import styles from './index.module.css'

export default function index({
    recipientsList,
} : {
    recipientsList: string[]
}) {
  return (
    <div className={styles.container}>
        {recipientsList.map((recipient, index) => (
            <Recipient
                key={index}
            >
                {recipient}
            </Recipient>
        ))}
    </div>
  )
}
