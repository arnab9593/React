import { Button, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const getData = JSON.parse(localStorage.getItem("signupArray"));
console.log(getData);

function Signin() {

    const [data, formData] = useState({
        email: "", password: ""
    })

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        console.log(value);
        formData({ ...data, [name]: value })
    }
    console.log(data);

    const checkLogin = () => {
        const { email, password } = data;
        // console.log(email, password);
        if (getData && getData.length) {
            const letLogin = getData.filter((el, i) => {
                return el.email === email && el.password === password
            });
            if (letLogin.length === 0) {
                alert("Invalid Credentials")
                formData({
                    email: "", password: ""
                });
                return;
            } else {
                alert("Login Successful");
                formData({
                    email: "", password: ""
                });
                return;
            }
        }
    }

    return (
        <>
            <VStack border={"1px solid black"} borderRadius={"10px"} h={"40vh"} w={"70vh"} m={"auto auto"} mt={10} padding={10}>
                <Heading fontSize={25} fontWeight={100} mb={10}>SignIN</Heading>
                <Input
                    placeholder='Enter Email'
                    type="email"
                    name="email"
                    onChange={handleChange}
                ></Input>

                <Input
                    placeholder='Enter Password'
                    type="password"
                    name='password'
                    onChange={handleChange}
                ></Input>
                <Button onClick={checkLogin} backgroundColor={"#CDDEF6"} w={"100%"}>Signin</Button>
                <Text>
                    <Link href='/signup'>I don't have account !</Link>
                </Text>
            </VStack>
        </>
    )
}

export default Signin