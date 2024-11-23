import type { Metadata } from 'next'
import { Raleway, Work_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import styles from './layout.module.css'

export const metadata: Metadata = {
    title: 'Mariana Costa',
    description: "Samples of Mariana's work"
}

// Fonts
const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap'
})

const workSans = Work_Sans({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${raleway.className} ${workSans.className}`}>
            <body>
                {/* Background video */}
                <video autoPlay loop muted className={styles.backgroundVideo}>
                    <source src="/disc-spin.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Header */}
                <Header />

                {/* Main content */}
                <div className={styles.container}>
                    <main style={{ flex: 1 }}>{children}</main>
                    <footer className={styles.footer}>
                        <p>© {new Date().getFullYear()} by Mariana Costa</p>
                        <div>
                            <a href="#">YT</a>
                            <a href="#">TW</a>
                            <a href="#">IG</a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}
