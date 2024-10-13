// /src/components/pages/CreatePage/PostForm/PostFormTemplate/index.tsx
"use client";

import React from 'react';
import styles from './index.module.css';
import Input from '@/components/ui/Input';

interface PostFormTemplateProps {
  subject: string;
  body: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  setBody: React.Dispatch<React.SetStateAction<string>>;
}

export default function PostFormTemplate({ subject, body, setSubject, setBody }: PostFormTemplateProps) {
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
    </div>
  );
}
