import React from 'react';
import styles from './content.css';

interface IContnetProps {
  children?: React.ReactNode;
}

export function Content({ children }: IContnetProps) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
