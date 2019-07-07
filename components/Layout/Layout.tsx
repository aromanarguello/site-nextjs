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
  HeaderText,
  Link,
  SubText
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
        <Text pb="10px" textSize={0}>
          Tech stack used: ReactJS, NextJS, Jest + Testing-lib,
          Styled-Components, Styled-System, React-Spring
        </Text>
        <Link href="https://github.com/aromanarguello/site-nextjs">
          <b>Source code</b>
        </Link>
      </Body>
      <Separator>{`.   .   .`}</Separator>
      <Footer padding="0 15px">
        <Text margin="20px 0">Find me at:</Text>
        <StyledBox width={[350, 700, 1000]} height="100px" flex="content">
          {findMeData.map(({ url, icon }, index) => (
            <a onClick={() => openNewTab(url)} key={index}>
              <Icon icon={icon} pl={index === 0 ? 0 : '15px'} pr="15px" />
            </a>
          ))}
          <Text margin="20px 0 10px 0">Project built at a hackathon:</Text>
          <Link
            href={
              'https://zealous-varahamihira-8ecd9a.netlify.com/?_sm_au_=isVJqSMJNnMnPWWj'
            }
          >
            BitWorker
          </Link>
          <SubText textSize={0}>Built on: 01-20-19</SubText>
          <SubText textSize={0}>
            Tech stack: ReactJS, Redux, JSS, Express
          </SubText>
        </StyledBox>
      </Footer>
    </StyledBox>
  )
}

export default Layout
