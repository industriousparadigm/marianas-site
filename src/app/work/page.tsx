'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import { thumbnails } from '../mockdata'

export default function WorkPage() {
    const searchParams = useSearchParams()
    const [currentVideo, setCurrentVideo] = useState<string>('')

    useEffect(() => {
        const initialVideoUrl = searchParams.get('videoUrl') || thumbnails[0].videoUrl
        setCurrentVideo(initialVideoUrl)
    }, [searchParams])

    const handleThumbnailClick = (videoUrl: string) => {
        setCurrentVideo(videoUrl)
    }

    return (
        <div className={styles.workPage}>
            {/* Big Video Viewer */}
            <div className={styles.videoViewer}>
                <iframe
                    src={currentVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                />
            </div>

            {/* Thumbnail Carousel */}
            <div className={styles.carousel}>
                {thumbnails.map((thumbnail, idx) => (
                    <div
                        key={idx}
                        className={styles.thumbnail}
                        onClick={() => handleThumbnailClick(thumbnail.videoUrl)}
                    >
                        <img src={thumbnail.src} alt={thumbnail.alt} className={styles.thumbnailImage} />
                        <div className={styles.thumbnailOverlay}>
                            <p>{thumbnail.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
