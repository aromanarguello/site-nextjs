import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Box } from '../'

const StyledBox = styled(Box)`
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  justify-content: center;
`

const Header = styled(Box)`
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

const Body = styled(Box)`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  @media (min-width: ${({
      theme: {
        breakPoints: { tablet }
      }
    }) => tablet}) {
    height: 200px;
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

const Footer = styled(Box)`
  font-size: ${({
    theme: {
      headings: { small }
    }
  }) => small[1]};
`

const Text = styled.p`
  margin: 28px 0;
`

const Icon = styled(FontAwesomeIcon)<SpaceProps>`
  ${space}
  font-size: ${({
    theme: {
      headings: { big }
    }
  }) => big[0]};
  cursor: pointer;
`
export { StyledBox, Text, Icon, Footer, Body, Separator, Header, HeaderText }
