import { Button, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'

const signupData = JSON.parse(localStorage.getItem("signupArray")) || [];

function Signup() {

    const [formData, setFormData] = useState(signupData);
    const [data, setData] = useState({
        name: "", email: "", phone: "", password: "", conPassword: ""
    })



    let name, value;

    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(value);
        setData({ ...data, [name]: value })
    }


    const submitForm = () => {
        if (data.password === data.conPassword) {
            setFormData([...formData, data]);
            setData({
                name: "", email: "", phone: "", password: "", conPassword: ""
            })
            alert("Signup Done")
        } else {
            alert("Password Mismatched")
            setData({
                password: "", conPassword: ""
            })
        }

    }

    useEffect(() => {
        localStorage.setItem("signupArray", JSON.stringify(formData));
    }, [formData])

    return (
        <>
            <VStack border={"1px solid black"} borderRadius={"10px"} h={"60vh"} w={"70vh"} m={"auto auto"} mt={10} padding={10}>
                <Heading fontSize={25} fontWeight={100} mb={10}>SignUP</Heading>
                <Input
                    placeholder='Enter Name'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder='Enter Email'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder='Enter Phone Number'
                    name='phone'
                    value={data.phone}
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder='Enter Password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                ></Input>
                <Input
                    placeholder='Confirm Password'
                    name='conPassword'
                    value={data.conPassword}
                    onChange={handleChange}
                ></Input>
                <Button backgroundColor={"#CDDEF6"} w={"100%"} onClick={submitForm}>Signup</Button>
                <Text>
                    <Link href='/signin'>I already have account !</Link>
                </Text>
            </VStack>
        </>
    )
}

export default Signup