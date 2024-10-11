"use client";

import React, { useState } from 'react';
import styles from './index.module.css';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface PostFormTemplateProps {
  id: string;
}

export default function PostFormTemplate({ id }: PostFormTemplateProps) {
  const router = useRouter();

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    console.log('id:', id, 'subject:', subject, 'body:', body);

    try {
      const response = await fetch('/api/firebase/update-document', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, subject, body }),
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      const result = await response.json();

      //redirect if success
      console.log('Success:', result);

    } catch (error) {
      console.error('Error:', error);
    }

    router.push(`/create/recipients/${id}`)
  };

  return (
    <div className={styles.container}>
      <Input 
        placeholder='Subject' 
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Input 
        placeholder='Body' 
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button 
        buttonType='primary' 
        onClick={handleSubmit}
      >
        Create
      </Button>
    </div>
  );
}
