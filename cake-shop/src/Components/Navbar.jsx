import { Button, Card, HStack, Image, Link } from '@chakra-ui/react'
import React from 'react'
import Search from './Search'

function Navbar() {
  return (
    <>
      <Card border={"1px solid black"} w={1400} m={"auto auto"} padding={2}>
        <HStack justifyContent="space-evenly">
          <Link href='/'>
            <Image
              src='https://img.freepik.com/free-vector/bakery-logo-food-business-template-branding-design-vector_53876-136255.jpg?w=740&t=st=1675356248~exp=1675356848~hmac=c1e944a08183bfb0c7611a1466d641088aae9aa2111f84e1b795d694d9d2bff9'
              borderRadius='full'
              boxSize='100px'
            >
            </Image>
          </Link>
          <Search />
          <Link href='/signup'>
            <Button>SignUP</Button>
          </Link>
          <Link href='/signin'>
            <Button>SignIN</Button>
          </Link>

        </HStack>
      </Card>
    </>
  )
}

export default Navbar