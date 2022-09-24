import { Box, Container, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

const Products = () => {

    const getData = () => {
        return axios.get(`http://localhost:5000/products`)
    }

    const [data, setData] = useState([])

    useEffect(() => {
        getData().then((res) => setData(res.data));
    }, [])
    console.log(data);
    return (
        <Container maxW={{ base: 'full', lg: "container.xl" }} p={{ base: 2, lg: 0 }}>
            {/* <Grid templateColumns={{ base: 1, md: 2, lg: 3 }}> */}
            <Grid w='full'
                templateColumns={{ base: "repeat(5,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
                gap={4}
            >
                {data.map((product) => (
                    <GridItem key={product.id}>
                        <VStack border='1px solid black'>

                            <Box>
                                <Image src={product.image} boxSize='sm' w='140px' h='140px'></Image>
                            </Box>
                            <Box>
                                <Text>{product.title}</Text>
                            </Box>
                            <Box>
                                <Text>{product.price}</Text>
                            </Box>
                        </VStack>

                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}

export default Products