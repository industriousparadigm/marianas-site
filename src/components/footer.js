import React from 'react'
import styled from 'styled-components'
import { Container } from './layoutComponents'

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>© {new Date().getFullYear()} Mariana</Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background: var(--primary-color);
  padding: 1rem 0;
`

export default StyledFooter
