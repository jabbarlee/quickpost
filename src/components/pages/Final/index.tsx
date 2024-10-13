import React from 'react'
import EmailTemplate from '@/components/pages/Final/EmailTemplate'

export default function index({ id } : { id: string }) {
  return (
    <div>
        <EmailTemplate id={id}/>
    </div>
  )
}
