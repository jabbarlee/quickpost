"use client"

import React from 'react'
import Button from '@/components/ui/Button'
import { generatePostId } from '@/actions/generatePostId'

export default function index() {
  

  return (
    <div>
        <h1>Create a new QuickPost</h1>
        <Button redirect="/create/postform" buttonType="primary" onClick={() => generatePostId()}>Start</Button>
    </div>
  )
}
