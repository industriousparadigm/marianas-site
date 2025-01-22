import type { Metadata } from 'next'
import {
    Roboto,
    Montserrat,
    Poppins,
    Playfair_Display,
    Libre_Baskerville,
    Lato,
    Open_Sans,
    Nunito
} from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import styles from './layout.module.css'

export const metadata: Metadata = {
    title: 'Thunder Fusion',
    description: "Samples of Thunder Fusion work"
}

const roboto = Roboto({
    weight: ['100', '300', '400'], // Light weights for general text
    subsets: ['latin'],
    display: 'swap'
})

// New fonts
const montserrat = Montserrat({
    weight: ['400', '700'], // Regular and bold
    subsets: ['latin'],
    display: 'swap'
})

const poppins = Poppins({
    weight: ['400', '700'], // Regular and bold
    subsets: ['latin'],
    display: 'swap'
})

const playfairDisplay = Playfair_Display({
    weight: ['400', '700'], // Regular and bold
    subsets: ['latin'],
    display: 'swap'
})

const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'], // Regular and bold
    subsets: ['latin'],
    display: 'swap'
})

const lato = Lato({
    weight: ['400', '700'], // Regular, semi-bold, bold
    subsets: ['latin'],
    display: 'swap'
})

const openSans = Open_Sans({
    weight: ['300', '400'], // Light and regular
    subsets: ['latin'],
    display: 'swap'
})

const nunito = Nunito({
    weight: ['300', '400'], // Light and regular
    subsets: ['latin'],
    display: 'swap'
})

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${roboto.className} ${montserrat.className} ${poppins.className} ${playfairDisplay.className} ${libreBaskerville.className} ${lato.className} ${openSans.className} ${nunito.className}`}
        >
            <body>
                {/* Background video */}
                <video autoPlay loop muted className={styles.backgroundVideo}>
                    <source src="/clouds.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Header */}
                <Header />
                {/* Main content */}
                <div className={styles.container}>
                    <main style={{ flex: 1 }}>{children}</main>
                </div>
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} by Thunder Fusion</p>
                </footer>
            </body>
        </html>
    )
}
