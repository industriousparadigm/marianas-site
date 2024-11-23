'use client'

import { FaYoutube, FaLinkedin } from 'react-icons/fa'
import styles from './SocialIcons.module.css'

export default function SocialIcons() {
    return (
        <div className={styles.socialIcons}>
            {/* YouTube Icon */}
            <a
                href="https://www.youtube.com/@halffullfilmworks4300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
            >
                <FaYoutube className={styles.icon} />
            </a>

            {/* LinkedIn Icon */}
            <a
                href="https://www.linkedin.com/in/mariana-miragaia-5244965b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin className={styles.icon} />
            </a>
        </div>
    )
}
