import SetOfThumbnails from './components/SetOfThumbnails'
import { thumbnails } from './mockdata'
import styles from './page.module.css'

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>THUNDER FUSION</h1>
                <h2>{'[ creative consultancy studio ]'}</h2>
            </section>

            <section>
                <p>
                    Hello! We’re <strong>Thunder Fusion</strong>, a Creative Consultancy Studio specialized in
                    humanitarian storytelling, crafting humane, dignified, and unique content for international
                    organizations and local enterprises alike.
                </p>
                <p>
                    Your mission is the spark that drives our creation. By linking{' '}
                    <strong>people, purpose, and creativity</strong>, your content will inspire action and amplify
                    impact.
                </p>
            </section>

            {/* Thumbnails */}
            <SetOfThumbnails thumbnails={thumbnails} />
        </>
    )
}
