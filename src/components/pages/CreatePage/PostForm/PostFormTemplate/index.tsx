import React from 'react'
import styles from './index.module.css'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function index() {
  return (
    <div>
        <Input placeholder='Subject'/>
        <Input placeholder='Body'/>
        <Button 
            buttonType='primary' 
            redirect='/create/(recipients)'
        >
            Create
        </Button>
    </div>
  )
}
