import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import noimage from "../Images/noimage.jpg"

const getData = () => {
    return fetch(`https://itchy-coveralls-ox.cyclic.app/api/cakes`).then(res => {
        return res.json();
    })
}

function Home() {
    const [postData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleApi = async () => {
        try {
            setLoading(true)
            const data = await getData();
            console.log(data);
            setData(data[0]);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    }

    useEffect(() => {
        handleApi()
    }, []);
    if (loading) {
        return <p>Loading..</p>
    }
    return (
        <Card maxW='sm'>
            {postData && postData.map(item => (
                <>
                    <CardBody border={"1px solid black"} >
                        <Image
                            src={item.img}
                            alt="image not found"
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.name}</Heading>
                            {/* <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text> */}
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </CardBody>
                </>
            ))}

        </Card>
    )
}

export default Home