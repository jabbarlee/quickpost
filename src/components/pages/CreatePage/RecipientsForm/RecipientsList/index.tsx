import React from 'react'
import Recipient from '@/components/ui/Recipient'

export default function index({
    recipientsList,
} : {
    recipientsList: string[]
}) {
  return (
    <div>
        {recipientsList.map((recipient) => (
            <Recipient
                key={recipient}
            >
                {recipient}
            </Recipient>
        ))}
    </div>
  )
}
