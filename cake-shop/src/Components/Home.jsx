import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
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
        <>
            <SimpleGrid columns={4} spacing={10} padding={10} >
                {postData && postData.map(item => (
                    <Card maxW='sm'>
                        <CardBody border={"1px solid black"} borderRadius={5}>
                            <Image
                                h={200}
                                w={"100%"}
                                src={item.img}
                                alt={item.name + "'s image not found"}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{item.name}</Heading>
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
                    </Card>
                ))}
            </SimpleGrid>
        </>
    )
}

export default Home