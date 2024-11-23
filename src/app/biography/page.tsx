import styles from './page.module.css'

export default function BiographyPage() {
    return (
        <div className={styles.biographyPage}>
            <h1 className={styles.title}>Biography</h1>
            <div className={styles.container}>
                <img src="/mariana.jpg" alt="Mariana Miragaia" className={styles.image} />
                <div className={styles.text}>
                    <p>
                        Mariana Miragaia is a producer and director driven by a passion for telling stories that make a
                        difference. With years of experience collaborating with humanitarian organizations, including
                        the International Federation of Red Cross, she has built a reputation for transforming her
                        clients’ visions into meaningful and impactful video content.
                    </p>
                    <p>
                        Mariana’s strength lies in her ability to truly listen and uncover the heart of a story. Whether
                        interpreting a brief or conducting interviews, she approaches her work with curiosity and
                        clarity, ensuring that each project aligns with its purpose and speaks to its audience. Her
                        attention to detail and dedication to excellence shine through every step of the creative
                        process.
                    </p>
                    <p>
                        Collaborating with Mariana is more than just hiring a producer—it’s partnering with someone who
                        cares deeply about your message. She builds strong relationships with her clients, creating a
                        seamless and inspiring production experience. For those seeking video storytelling with purpose,
                        Mariana is a trusted creative partner.
                    </p>
                </div>
            </div>
        </div>
    )
}
