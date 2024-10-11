import React from 'react'
import RecipientsFormTemplate from './RecipientsFormTemplate'

export default function index( { id }: { id: string } ) {
  return (
    <div>
        <p>Add your email recipients</p>
        <RecipientsFormTemplate id={id}/>
    </div>
  )
}
