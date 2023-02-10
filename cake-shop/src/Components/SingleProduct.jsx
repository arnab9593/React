import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const getData = async (url) => {
    return await fetch(url).then((res) => res.json());
}

function SingleProduct() {

    const { id } = useParams()
    const [single, setSingle] = useState({});

    useEffect(() => {
        getData(`https://itchy-coveralls-ox.cyclic.app/api/cakes?id=${id}`).then(res => {
            setSingle(res[0])
        })
    }, [id]);
    console.log(single);

    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                // border={"1px solid black"}
                h={"50vh"}
                w={1400}
                m={"auto auto"}
                mt={10}
                padding={2}
            >
                <Image
                    objectFit='cover'
                    w={"500px"}
                    src={single.img}
                    alt={single.name}
                    borderRadius={10}
                />

                <Stack mt={10}>
                    <CardBody>
                        <Heading size='md'>{single.name}</Heading>

                        <Text py='2'>
                            {single.des}
                        </Text>
                        <Heading size='md'>${single.price}</Heading>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Now
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default SingleProduct