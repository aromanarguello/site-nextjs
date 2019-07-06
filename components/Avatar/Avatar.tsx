import * as React from 'react'
import styled from 'styled-components'

interface IAvatarProps {
  imageName: string
}

const Image = styled.img`
  width: 250px;
  height: 280px;
  border: ${({
    theme: {
      colors: { navy }
    }
  }) => `1px solid ${navy}`};
`

const Avatar: React.FC<IAvatarProps> = ({ imageName }) => {
  return (
    <Image
      src={require(`../../assets/images/${imageName}.jpeg`)}
      alt="avatar"
    />
  )
}

export default Avatar
