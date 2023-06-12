import styles from './page.module.css'
import React from 'react'
import { Presentation } from '@/components/Presentation/Presentation'
import { Services } from '@/components/Services/Services'

export default function Home() {
  return (
    <main className={styles.Container}>
      <Presentation/>
      <Services/>
    </main>
  )
}
