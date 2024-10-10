import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    buttonType?: 'primary' | 'secondary';
    redirect?: string;
}

export default function Button({ children, buttonType = 'primary', redirect, ...props }: ButtonProps) {
    return (
        <div className={styles.container}>
            <button
                className={buttonType === 'primary' ? styles.primary : styles.secondary}
                {...props}
            >
                {redirect ? (
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href={redirect}>
                        {children}
                    </Link>
                ) : (
                    children
                )}
            </button>
        </div>
    );
}
