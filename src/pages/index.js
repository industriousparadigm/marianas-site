import React from 'react'
import Layout from '../components/layout'
import { Container } from '../components/layoutComponents'
import SEO from '../components/seo'
import VideoCarousel from '../components/video-carousel'
import YTVideo from '../components/youtube-video'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title='Home' keywords={[`video`, `creative`, `producer`]} />
      <VideoCarousel>
        <YTVideo id='SPa_kdv6eb8' />
        <YTVideo id='U_YIPOmDC0I' />
        <YTVideo id='tdwzb2Fttbc' />
        <YTVideo id='CJNzkMoq_Z4' />
        <YTVideo id='qnJ-cmuOqpU' />
      </VideoCarousel>
    </Container>
  </Layout>
)

export default IndexPage
