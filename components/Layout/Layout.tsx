import * as React from 'react'
import { Avatar, Bio } from '../'
import {
  StyledBox,
  Text,
  Icon,
  Footer,
  Body,
  Separator,
  Header,
  HeaderText
} from './Layout.styles'
import {
  faGithubSquare,
  faMedium,
  faLinkedin,
  faTwitterSquare,
  faDev
} from '@fortawesome/free-brands-svg-icons'

const findMeData = [
  { url: 'https://github.com/aromanarguello', icon: faGithubSquare },
  { url: 'https://medium.com/@aromanarguello', icon: faMedium },
  { url: 'https://www.linkedin.com/in/aromanarguello/', icon: faLinkedin },
  { url: 'https://twitter.com/aromanarguello', icon: faTwitterSquare },
  { url: 'https://dev.to/aromanarguello', icon: faDev }
]

/**
 * opens link in new tab
 * @param url
 */
const openNewTab = (url: string) => window.open(url, '_blank')

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
      <Separator>{`.   .   .`}</Separator>
      <Body>
        <Bio />
      </Body>
      <Separator>{`.   .   .`}</Separator>
      <Footer padding="0 15px">
        <Text>Find me at:</Text>
        <StyledBox width={[350, 700, 1000]} flex="content">
          {findMeData.map(({ url, icon }, index) => (
            <a onClick={() => openNewTab(url)} key={index}>
              <Icon icon={icon} pl={index === 0 ? 0 : '15px'} pr="15px" />
            </a>
          ))}
        </StyledBox>
      </Footer>
    </StyledBox>
  )
}

export default Layout
