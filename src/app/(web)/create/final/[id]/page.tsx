import React from 'react'
import Final from '@/components/pages/Final'

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
        <Final id={params.id}/>
    </div>
  )
}
