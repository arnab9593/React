import React, { useEffect, useState } from 'react'
import { Button, Card, HStack, Input, ListItem, OrderedList, UnorderedList, } from '@chakra-ui/react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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
                    >
                    </Input>
                    <Button>Search</Button>
                </HStack>
                <Card position={'absolute'} mt={10} w={500}>
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
                            .map((item) => <UnorderedList>
                                <ListItem  >
                                    <Link to={`/single/${item.id}`}
                                        onClick={() => setSearch("")}
                                        style={{ textDecoration: "none", color: 'black' }}
                                    >
                                        {item.name}
                                    </Link>
                                </ListItem>
                            </UnorderedList>)

                    )}
                </Card>


            </Card>

        </>
    )
}

export default Search