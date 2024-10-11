"use client"

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { generatePostId } from '@/actions/generatePostId'
import { useRouter } from 'next/navigation'
import { setDocument } from '@/data/lib/firestore'

export default function index() {
  const router = useRouter()

  const onClick = async () => {
    const id = generatePostId()
    console.log(id)

    // const data = {
    //   createdAt: new Date(),
    // };

    // try{
    //   await setDocument('posts', id, data);
    //   console.log('Document set');
    // } catch (error) {
    //   console.error('Error setting document: ', error);
    // }

    router.push(`/create/postform/${id}`)
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
