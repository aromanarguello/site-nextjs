import * as React from 'react'
import { Box, Avatar, Bio } from '../'

import styled from 'styled-components'

const StyledBox = styled(Box)`
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  justify-content: center;
`

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({
      theme: {
        breakPoints: { mobileM }
      }
    }) => mobileM}) {
    height: 400px;
  }
`

const Body = styled.div`
  height: 371px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  @media (min-width: 600px) {
    height: 180px;
  }
`

const HeaderText = styled.p`
  font-size: ${({
    theme: {
      headings: { big }
    }
  }) => big[0]};
`

const Separator = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`

const Layout: React.FC = () => {
  return (
    <StyledBox
      width={[350, 700, 1000]}
      height={1000}
      margin="0 auto"
      paddingTop={50}
      boxSizing="border-box"
      flex="content"
      flexDirection="column"
    >
      <Header>
        <Avatar imageName="avatar" />
        <HeaderText>Alejandro Roman</HeaderText>
      </Header>
      <Separator>{`. . .`}</Separator>
      <Body>
        <Bio />
      </Body>
      <Separator>{`. . .`}</Separator>
      <footer>👞</footer>
    </StyledBox>
  )
}

export default Layout
