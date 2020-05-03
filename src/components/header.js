import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ location }) => {
  const Wrapper = styled.header`
    display: flex;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #cbd5e0;
    height: 10vh;
    align-items: center;
  `

  const SiteTitle = styled.h1`
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;
    color: #af4a14;
    margin-bottom: 0;
  `

  const Nav = styled.ul`
    list-style: none;
    margin-left: auto;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  `

  const MenuItem = styled.li`
    margin-right: 20px;
    margin-bottom: 0;
    height: 100%;
  `

  const MenuItemName = styled.h1`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 0;
  `

  const UnstyledLink = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  `

  return (
    <Wrapper>
      <SiteTitle>
        <UnstyledLink to='/'>Mariana Miragaia</UnstyledLink>
      </SiteTitle>

      <Nav>
        <MenuItem>
          <MenuItemName>
            <UnstyledLink to={`/projects`}>Projects</UnstyledLink>
          </MenuItemName>
        </MenuItem>
        <MenuItem>
          <MenuItemName>
            <UnstyledLink to={`/about`}>About</UnstyledLink>
          </MenuItemName>
        </MenuItem>
        <MenuItem>
          <MenuItemName>
            <UnstyledLink to={`/contact`}>Contact</UnstyledLink>
          </MenuItemName>
        </MenuItem>
      </Nav>
    </Wrapper>
  )
}

export default Header
