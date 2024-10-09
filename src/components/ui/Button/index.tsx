import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

export default function index({
    children,
    buttonType,
    redirect,
    ...props
} : {
    children: React.ReactNode
    buttonType?: 'primary' | 'secondary'
    redirect?: string
}) {
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
