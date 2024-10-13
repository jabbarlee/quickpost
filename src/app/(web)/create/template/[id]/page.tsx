import React from 'react'
import TemplatePage from '@/components/pages/CreatePage/TemplatePage'

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <TemplatePage id={params.id}/>
    </div>
  )
}
