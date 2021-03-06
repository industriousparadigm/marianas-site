import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from './globalStyle'
import { MainWrapper, BodyWrapper } from './layoutComponents'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <GlobalStyle />
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <BodyWrapper>{children}</BodyWrapper>
          <Footer />
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
