import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import Head from 'next/head'
import './globals.css'
import styles from "./page.module.css"

export const metadata = {
  title: 'Otorrinolaringólogo en Monterrey',
  description: 'El mejor otorrinolaringólogo en Monterrey, brindando atención especializada en problemas de oído, nariz y garganta. Nuestro experto equipo médico ofrece diagnóstico preciso y tratamientos personalizados para mejorar tu salud auditiva y respiratoria. ¡Programa tu cita hoy mismo y descubre una nueva dimensión de bienestar!',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
  charset: 'utf-8',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Header/>
        <div className={styles.ContChild}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
