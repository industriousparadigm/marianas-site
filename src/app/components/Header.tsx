'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialIcons from '@/app/components/SocialIcons'
import styles from './Header.module.css'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Logo */}
                <Link href="/">
                    <div className={styles.logo}>[ Mariana Costa ]</div>
                </Link>

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
                    {/* <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                        Contact
                    </Link> */}
                </nav>

                {/* Social Media Icons */}
                <SocialIcons />
            </div>
        </header>
    )
}
