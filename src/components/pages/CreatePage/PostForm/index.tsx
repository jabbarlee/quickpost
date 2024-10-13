import React from 'react'
import PostFormTemplate from './PostFormTemplate'

export default function index({
  subject,
  body,
  setSubject,
  setBody,
  className
} : {
  subject: string,
  body: string,
  setSubject: React.Dispatch<React.SetStateAction<string>>,
  setBody: React.Dispatch<React.SetStateAction<string>>,
  className: string
}) {
  
  return (
    <div className={className}>
        <PostFormTemplate subject={subject} body={body} setSubject={setSubject} setBody={setBody}/>
    </div>
  )
}
