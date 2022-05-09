import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 15px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: scale(0.95);
  }
`

const Logo = () => {
  const makegoodlaserImg = `/images/makegoodlaser${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={makegoodlaserImg} width={30} height={28} alt="logo" />
          <Text
            letterSpacing="wide"
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            ml={3}
          >
            Лазерный Центр
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo