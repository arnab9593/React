import { Button, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Signup() {
    return (
        <>
            <VStack border={"1px solid black"} borderRadius={"10px"} h={"60vh"} w={"70vh"} m={"auto auto"} mt={10} padding={10}>
                <Heading fontSize={25} fontWeight={100} mb={10}>SignUP</Heading>
                <Input
                    placeholder='Enter Name'
                ></Input>
                <Input
                    placeholder='Enter Email'
                ></Input>
                <Input
                    placeholder='Enter Phone Number'
                ></Input>
                <Input
                    placeholder='Enter Password'
                ></Input>
                <Input
                    placeholder='Confirm Password'
                ></Input>
                <Button backgroundColor={"#CDDEF6"} w={"100%"}>Signup</Button>
                <Text>
                    <Link href='/signin'>I already have account !</Link>
                </Text>
            </VStack>
        </>
    )
}

export default Signup