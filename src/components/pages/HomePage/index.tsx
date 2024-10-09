import React from 'react'
import styles from './index.module.css'
import Button from '@/components/ui/Button'

export default function index() {
  return (
    <div>
        <h1>Create a new QuickPost</h1>
        <Button redirect="/create" buttonType="primary">
            Let's go
        </Button>
    </div>
  )
}
