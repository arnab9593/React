import React from 'react'
import { Button, Card, HStack, Input, } from '@chakra-ui/react'

function Search() {
    return (
        <>
            <Card >

                <HStack>
                    <Input
                        placeholder='Search...'
                        w={900}
                    >
                    </Input>
                    <Button>Search</Button>
                </HStack>



            </Card>
        </>
    )
}

export default Search