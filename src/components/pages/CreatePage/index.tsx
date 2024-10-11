"use client"

import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import { generatePostId } from '@/actions/generatePostId'
import { useRouter } from 'next/navigation'

export default function index() {

  const router = useRouter()

  const onClick = () => {
    const id = generatePostId()
    console.log(id)

    router.push(`/create/postform`)
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
