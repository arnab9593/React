import { Box, Image, Text } from '@chakra-ui/react';
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
            <Box>
                <Image src={single.img}></Image>
                <Text></Text>
            </Box>
        </>
    )
}

export default SingleProduct