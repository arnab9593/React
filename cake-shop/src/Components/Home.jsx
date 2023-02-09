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
import { Link } from 'react-router-dom';

// const getData = () => {
// return fetch(`https://itchy-coveralls-ox.cyclic.app/api/cake/`)
//     .then(res => {
//         return res.json();
//     }).catch(e => {
//         return e;
//     })
// }

function Home() {
    const [postData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleApi = async () => {
        setLoading(true)
        // try {
        //     // setLoading(true)
        //     const data = await getData();
        //     // console.log(data);
        //     setData(data);
        //     setLoading(false);
        // } catch (e) {
        //     setLoading(true);
        //     // console.log(e.message);
        // }
        fetch(`https://itchy-coveralls-ox.cyclic.app/api/cakes/`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res);
                setData(res);
                setLoading(false);
            })
            .catch(e => {
                setLoading(true)
            })
    }

    useEffect(() => {
        handleApi()
    }, []);
    if (loading) {
        return <p>Loading..</p>
    }
    return (
        <>
            <SimpleGrid columns={4} spacing={10} padding={10} position={'absolute'}>
                {postData?.map(item => (
                    <Card maxW='sm' key={item.id}>
                        <Link to={`/single/${item.id}`}>
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
                                        ${item.price}
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
                        </Link>
                    </Card>
                ))}
            </SimpleGrid>

        </>
    )
}

export default Home