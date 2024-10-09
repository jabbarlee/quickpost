import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

export default function index(
    children: React.ReactNode,
    redirect?: string,
    buttonType?: 'primary' | 'secondary',
    props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
  return (
    <div className={styles.container}>
        <button 
            className={
                buttonType === 'primary' ? styles.primary : styles.secondary
            }
            {...props}
        >
            { redirect ? 
                (<Link href={redirect}>{children}</Link>)
            : 
                (children)
            }
        </button>
    </div>
  )
}
