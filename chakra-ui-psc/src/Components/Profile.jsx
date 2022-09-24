import { Box, Center, Divider, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";


const user = {
    name: "Arnab Pal",
    phone: "8436510374",
    email: "arnabpal1@outlook.com",
    age: "24",
    address: "Durgapur",
    country: "India",
    photo: "https://avatars.githubusercontent.com/u/105920194?v=4"
}


const Profile = () => {
    return (

        <VStack w='full' h='600' p={10} spacing={1} alignItems="flex-start" bg='gray.50'>
            <Center width='full'>
                <Image
                    src={user.photo}
                    alt='dp'
                    borderRadius='full'
                    bosmize='sm'
                    w='170px'
                    h='170px'>
                </Image>
            </Center>
            <Divider />
            <SimpleGrid columns={2} spacing={10} w='full'>
                <Box>
                    <Text fontSize='sm'>Name</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.name}</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>Phone</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.phone}</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>Email</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.email}</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>Age</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.age}</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>Address</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.address}</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>Country</Text>
                </Box>
                <Box>
                    <Text fontSize='sm'>{user.country}</Text>
                </Box>
            </SimpleGrid>
        </VStack>



    )
}

export default Profile
