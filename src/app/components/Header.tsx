'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialIcons from '@/app/components/SocialIcons'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {/* Logo */}
                <Link href="/">
                    <div className={styles.logoContainer}>
                        <Image style={{ borderRadius: '16px' }} alt="thunder fusion logo" src='/tf-logo-bg.png' width={100} height={100} />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className={styles.nav}>
                    {/* <Link href="/" className={pathname === '/' ? styles.active : ''}>
                        Home
                    </Link> */}
                    <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                        contact
                    </Link>
                    <Link href="/work" className={pathname === '/work' ? styles.active : ''}>
                        work
                    </Link>
                    {/* <Link href="/biography" className={pathname === '/biography' ? styles.active : ''}>
                        Biography
                    </Link> */}
                </nav>

                {/* Social Media Icons */}
                <SocialIcons />
            </div>
        </header>
    )
}
