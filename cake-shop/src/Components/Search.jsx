import React, { useEffect, useState } from 'react'
import { Button, Card, HStack, Input, } from '@chakra-ui/react'
import axios from 'axios'
import Home from './Home';

function Search() {

    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const res = await axios.get("https://itchy-coveralls-ox.cyclic.app/api/cakes/");
            // console.log(res);
            setPost(res.data);
            setLoading(false);

        }
        getData();
    }, []);
    console.log(post);

    return (
        <>
            <Card >

                <HStack>
                    <Input
                        placeholder='Search...'
                        w={900}
                        onChange={(e) => setSearch(e.target.value)}
                    // value={post}
                    >
                    </Input>



                    <Button>Search</Button>

                </HStack>
                <Card border={"1px solid black"}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        post.filter((value, i) => {
                            if (search === "") {
                                return;
                            } else if (value.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                                return (
                                    value
                                )
                            }
                        })
                            .map((item) => <p key={item.id}>{item.name}</p>)

                    )}
                </Card>


            </Card>

        </>
    )
}

export default Search