import * as React from 'react'
import { Text } from '../Layout/Layout.styles'

const Bio: React.FC = () => {
  return (
    <>
      <Text pb="20px">
        I am a front-end engineer who just relocated to New York City. I currently work Venmo! More to come...
      </Text>
      <Text pb="20px">
        My hobbies include writing awesome components, learning new technologies
        and then writting about them through blogpost
      </Text>
    </>
  )
}

export default Bio
