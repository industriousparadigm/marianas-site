'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import styles from './page.module.css'
import { thumbnails } from '../mockdata'

function VideoPageContent() {
    const searchParams = useSearchParams()
    const [currentVideoId, setCurrentVideoId] = useState<string>(thumbnails[0].videoId)
    const [currentVideoTitle, setCurrentVideoTitle] = useState<string>(thumbnails[0].title)

    useEffect(() => {
        const videoIdFromParams = searchParams.get('videoId')
        if (videoIdFromParams) {
            setCurrentVideoId(videoIdFromParams)
            const selectedThumbnail = thumbnails.find((thumbnail) => thumbnail.videoId === videoIdFromParams)
            setCurrentVideoTitle(selectedThumbnail?.title || thumbnails[0].title)
        } else {
            setCurrentVideoId(thumbnails[0].videoId) // Fallback to the first video
            setCurrentVideoTitle(thumbnails[0].title)
        }
    }, [searchParams])

    const handleThumbnailClick = (videoId: string, title: string) => {
        setCurrentVideoId(videoId)
        setCurrentVideoTitle(title)
        window.history.pushState(null, '', `/work?videoId=${encodeURIComponent(videoId)}`)
    }

    return (
        <div className={styles.workPage}>
            {/* Big Video Viewer */}
            <div className={styles.videoViewer}>
                <iframe
                    src={`https://www.youtube.com/embed/${currentVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.videoIframe}
                />
            </div>

            {/* Video Title Header */}
            <h1 className={styles.videoTitle}>{currentVideoTitle}</h1>

            {/* Stacked Thumbnails */}
            <div className={styles.stackedThumbnails}>
                {thumbnails.map((thumbnail, idx) => (
                    <div
                        key={idx}
                        className={styles.thumbnail}
                        onClick={() => handleThumbnailClick(thumbnail.videoId, thumbnail.title)}
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

export default function WorkPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VideoPageContent />
        </Suspense>
    )
}
