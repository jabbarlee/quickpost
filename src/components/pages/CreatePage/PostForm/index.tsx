import React from 'react'
import PostFormTemplate from './PostFormTemplate'

export default function index({ id }: { id: string }) {
  
  return (
    <div>
        <h1>Create your email template</h1>
        <PostFormTemplate id={id}/>
    </div>
  )
}
