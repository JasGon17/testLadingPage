import styles from './page.module.css'
import React from 'react'
import { Presentation } from '@/components/Presentation/Presentation'
import { Services } from '@/components/Services/Services'
import { Contact } from '@/components/Contact/Contact'
import { Location } from '@/components/Location/Location'
import { Resume } from '@/components/Resume/Resume'

export default function Home() {
  return (
    <main className={styles.Container}>
      <Presentation/>
      <Services/>
      <Contact/>
      <Location/>
      <Resume/>
    </main>
  )
}
