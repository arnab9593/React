import { Button, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Signin() {
    return (
        <>
            <VStack border={"1px solid black"} borderRadius={"10px"} h={"40vh"} w={"70vh"} m={"auto auto"} mt={10} padding={10}>
                <Heading fontSize={25} fontWeight={100} mb={10}>SignIN</Heading>
                <Input
                    placeholder='Enter Email'
                ></Input>

                <Input
                    placeholder='Enter Password'
                ></Input>
                <Button backgroundColor={"#CDDEF6"} w={"100%"}>Signin</Button>
                <Text>
                    <Link href='/signup'>I don't have account !</Link>
                </Text>
            </VStack>
        </>
    )
}

export default Signin