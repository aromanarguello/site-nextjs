import * as React from 'react'
import { Avatar, Bio } from '../'
import {
  StyledBox,
  Icon,
  Footer,
  Body,
  Separator,
  Header,
  HeaderText,
  HeaderTwo,
  Link
} from './Layout.styles'
import {
  faGithubSquare,
  faMedium,
  faLinkedin,
  faTwitterSquare,
  faDev
} from '@fortawesome/free-brands-svg-icons'
import { useSpring, animated } from 'react-spring'

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
  const [isLoaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    document.title = "Alejandro Roman's Personal Site"
    setLoaded(true)
  }, [])

  const [props, set] = useSpring(() => ({
    opacity: 0,
    config: {
      mass: 300,
      tension: 450,
      friction: 500
    }
  }))

  set({ opacity: isLoaded ? 1 : 0 })

  return (
    <StyledBox
      width={[375, 768, 1024]}
      height={1000}
      margin="0 auto"
      paddingTop={50}
      boxSizing="border-box"
      flex="content"
      flexDirection="column"
    >
      <animated.div style={props}>
        <Header>
          <Avatar />
          <HeaderText>Alejandro Roman</HeaderText>
        </Header>
        <Separator>{`.   .   .`}</Separator>
        <Body title="body">
          <Bio />
          <Link
            center
            pt="10px"
            href="https://github.com/aromanarguello/site-nextjs"
          >
            Source code
          </Link>
        </Body>
        <Separator mb="35px">{`.   .   .`}</Separator>
        <Footer padding="0 15px">
          <HeaderTwo pb="10px">Find me at:</HeaderTwo>
          <StyledBox width={[375, 768, 1024]} height="300px" flex="content">
            {findMeData.map(({ url, icon }, index) => (
              <a onClick={() => openNewTab(url)} key={index}>
                <Icon
                  icon={icon}
                  pl={index === 0 ? 0 : '15px'}
                  pr="15px"
                  pb="10px"
                />
              </a>
            ))}
          </StyledBox>
        </Footer>
      </animated.div>
    </StyledBox>
  )
}

export default Layout
