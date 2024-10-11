import React from 'react'
import RecipientsForm from '@/components/pages/CreatePage/RecipientsForm'

export default function page({ params }: { params: { id: string } } ) {
  return (
    <div>
        <RecipientsForm id={params.id}/>
    </div>
  )
}
