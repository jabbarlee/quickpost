import React from 'react'
import PostForm from '@/components/pages/CreatePage/PostForm'

export default function page({ params }: { params: { id: string } }) {
  return (
    <div> 
        <PostForm id={params.id}/>
    </div>
  )
}
