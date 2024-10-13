import React from 'react'
import Forms from './Forms'

export default function index({ id }: { id: string }) {
  return (
    <div>
        <h1>Create your email template and add recipients</h1>
        <Forms id={id}/>
    </div>
  )
}
