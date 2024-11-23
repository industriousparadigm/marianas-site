import { VideoPreviewThumbnail } from '../types'
import styles from './SetOfThumbnails.module.css'
import Link from 'next/link'

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
        <Link href={`/work?videoId=${encodeURIComponent(image.videoId)}`} className={styles.thumbnail}>
            <img src={image.src} alt={image.alt} className={styles.thumbnailImage} />
            <div className={styles.overlay}>
                <p className={styles.title}>{image.title}</p>
            </div>
        </Link>
    )
}
