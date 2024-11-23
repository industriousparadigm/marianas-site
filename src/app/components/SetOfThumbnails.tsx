'use client'

import { VideoPreviewThumbnail } from '../types'
import styles from './SetOfThumbnails.module.css'

type SetOfThumbnailsProps = {
    thumbnails: VideoPreviewThumbnail[]
}

export default function SetOfThumbnails({ thumbnails }: SetOfThumbnailsProps) {
    return (
        <div className={styles.grid}>
            {thumbnails.map((tn, idx) => (
                <Thumbnail key={idx} image={tn} />
            ))}
        </div>
    )
}

function Thumbnail({ image }: { image: VideoPreviewThumbnail }) {
    return (
        <div className={styles.thumbnail}>
            {/* Image */}
            <img src={image.src} alt={image.alt} className={styles.thumbnailImage} />
            {/* Hover overlay */}
            <div className={styles.overlay}>
                <p className={styles.title}>{image.title}</p>
            </div>
        </div>
    )
}
