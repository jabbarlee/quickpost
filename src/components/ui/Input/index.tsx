import React from 'react';
import styles from './index.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textarea?: false;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textarea: true;
}

type CombinedProps = InputProps | TextAreaProps;

export default function InputComponent({ textarea = false, ...props }: CombinedProps) {
  return (
    <div>
      {textarea ? (
        <textarea className={styles.input} {...(props as TextAreaProps)} />
      ) : (
        <input className={styles.input} {...(props as InputProps)} />
      )}
    </div>
  );
}
