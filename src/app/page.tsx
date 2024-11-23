import SetOfThumbnails from './components/SetOfThumbnails'
import { thumbnails } from './mockdata'
import styles from './page.module.css'

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>
                    <span>Mariana</span>
                    <span>Costa</span>
                </h1>
                <h2>{'[ Director & Filmmaker ]'}</h2>
            </section>

            {/* Thumbnails */}
            <SetOfThumbnails thumbnails={thumbnails} />
        </>
    )
}
