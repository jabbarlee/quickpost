import React from 'react'
import RecipientsFormTemplate from './RecipientsFormTemplate'

export default function index({ 
  recipient, 
  setRecipient, 
  recipients, 
  setRecipients,
  className
} : {
  recipient: string,
  setRecipient: React.Dispatch<React.SetStateAction<string>>,
  recipients: string[],
  setRecipients: React.Dispatch<React.SetStateAction<string[]>>,
  className: string
}) {
  return (
    <div className={className}>
      <RecipientsFormTemplate recipients={recipients} setRecipients={setRecipients} recipient={recipient} setRecipient={setRecipient} />
    </div>
  )
}
