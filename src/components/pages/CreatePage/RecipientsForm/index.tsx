import React from 'react'
import RecipientsFormTemplate from './RecipientsFormTemplate'

export default function index( { id }: { id: string } ) {
  return (
    <div>
        <h1>Add your email recipients</h1>
        <RecipientsFormTemplate id={id}/>
    </div>
  )
}
