import { Container, Flex, VStack } from "@chakra-ui/react"
import React from "react"
import Profile from "../Components/Profile"
import SignupForm from "../Components/SignupForm"

const Home = () => {
    return (
        <Container maxW={{ base: 'full', lg: "container.xl" }} p={{ base: 2, md: 0 }}>
            <Flex h='100vh' py={20} direction={{ base: "column-reverse", lg: "row" }}>
                <SignupForm />
                <Profile />
            </Flex>
        </Container>
    )
}

export default Home
