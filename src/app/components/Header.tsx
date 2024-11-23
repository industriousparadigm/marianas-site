'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Logo */}
                <div className={styles.logo}>[ Mariana Costa ]</div>

                {/* Navigation */}
                <nav className={styles.nav}>
                    <Link href="/" className={pathname === '/' ? styles.active : ''}>
                        Home
                    </Link>
                    <Link href="/work" className={pathname === '/work' ? styles.active : ''}>
                        Work
                    </Link>
                    <Link href="/biography" className={pathname === '/biography' ? styles.active : ''}>
                        Biography
                    </Link>
                    <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                        Contact
                    </Link>
                </nav>

                {/* Social Media Icons */}
                <div className={styles.socialIcons}>
                    <a href="#">YT</a>
                    <a href="#">TW</a>
                    <a href="#">IG</a>
                </div>
            </div>
        </header>
    )
}
