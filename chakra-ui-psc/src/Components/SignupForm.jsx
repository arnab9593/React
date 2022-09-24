import { Heading, VStack, Text, Grid, GridItem, FormControl, FormLabel, Input, Textarea, Select, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
const initState = {
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
    country: "",
    photo: ""
}

const SignupForm = () => {

    const [formData, setFormData] = useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target
        const val = name === "age" ? Number(value) : value;
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = () => {
        axios({
            method: "POST", url: 'http://localhost:5000/users',
            data: formData
        }).then((res) => {
            setFormData(initState)
        })


    }
    console.log(formData);
    const { name, phone, email, age, address, country, photo } = formData

    return (
        <VStack w='full' h='600' p={10} spacing={2} alignItems="flex-start" bg='orange.50'>
            <VStack alignItems='flex-start' w='full' spacing={1}>
                <Heading>Signup Form</Heading>
                <Text>Fill all the fields</Text>
            </VStack >
            <Grid templateColumns='repeat(2, 1fr)' gap={2} w='full'>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input placeholder='Name' name="name" type='text' value={name} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Phone</FormLabel>
                        <Input placeholder='Phone' name="phone" type='number' value={phone} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email' name="email" type='email' value={email} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Age</FormLabel>
                        <Input placeholder='Age' name="age" type='number' value={age} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Textarea placeholder='Address' name="address" type='text' value={address} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={{ base: 2, md: 1 }}>
                    <FormControl isRequired>
                        <FormLabel>Country</FormLabel>
                        <Select placeholder="Select Country" value={country} name='country' onChange={handleChange}>
                            <option value='india'>India</option>
                            <option value='usa'>USA</option>
                            <option value='canada'>Canada</option>
                            <option value='uk'>UK</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl isRequired>
                        <FormLabel>Photo</FormLabel>
                        <Input placeholder='Photo URL' name="photo" type='text' value={photo} onChange={handleChange} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <Button w='full' variant='outline' onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                </GridItem>
            </Grid>
        </VStack>


    )
}

export default SignupForm
