"use client"

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { generatePostId } from '@/actions/generatePostId'
import { useRouter } from 'next/navigation'

export default function index() {
  const router = useRouter()

  const onClick = async () => {
    const id = generatePostId()
    console.log(id)
    
    try {
      const response = await fetch('/api/firebase/create-document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, data: { createdAt: new Date() } }),
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      const result = await response.json();

      //redirect if success
      console.log('Success:', result);
      router.push(`/create/template/${id}`)

    } catch (error) {
      console.error('Error:', error);
    }

  }

  return (
    <div>
        <h1>Create a new QuickPost</h1>
        <Button
          buttonType="primary" 
          onClick={() => onClick()}
        >
          Start
        </Button>
    </div>
  )
}
