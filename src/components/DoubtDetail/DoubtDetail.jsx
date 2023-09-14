import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/doubts/doubtsSlice";
import { Spinner, Box, Card, Text, Image, Grid, HStack, Divider } from "@chakra-ui/react";
import getImageURL from "../../app/utils";
import Answers from "../Answers/Answers";

const DoubtDetail = () => {
    const dispatch = useDispatch();
    const { _id } = useParams();
    const { doubt, isLoading } = useSelector((state) => state.doubts);
    const { user } = useSelector((state) => state.auth);
    console.log(user);
    useEffect(() => {
        dispatch(getById(_id));
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <Box h="70vh">
                <Text as="b" fontSize="1.2em" ml="9%" mt="10%">
                    Duda sobre {doubt.topic}
                </Text>
                <Card w="80%" ml="9%" mt="5vh" p="2%" boxShadow="2xl">
                    <Grid templateColumns="1fr 2fr">
                        <Box>
                            <Image src={getImageURL(doubt.imagePath)} h="100%" w="100%" objectFit="cover" borderRadius="8px" />
                        </Box>
                        <Box p="2%">
                            <HStack>
                                <Box>{user.avatar && <Image src={getImageURL(user.avatar)} alt={user.name} h="50px" w="50px" objectFit="cover" borderRadius="full" />}</Box>
                                <Box>
                                    <Text as="b" fontSize="1.2em">
                                        {user.name}
                                    </Text>
                                    <Text fontSize="0.8em" color="gray.500">
                                        {user.role.toUpperCase()}
                                    </Text>
                                </Box>
                            </HStack>

                            <Text as="b">{doubt.question}</Text>
                            <Divider w="90%" p="5%" color="teal.500" alignSelf="center" />

                            {doubt._idAnswer?.map((answer) => (
                                <Box mt="2vh" key={answer._id}>
                                    <HStack>
                                        <Box>{user.avatar && <Image src={getImageURL(user.avatar)} alt={user.name} h="50px" w="50px" objectFit="cover" borderRadius="full" />}</Box>
                                        <Box>
                                            <Text as="b" fontSize="1.1em">
                                                {answer._idUser.name}
                                            </Text>
                                            <Text fontSize="0.8em" color="gray.500">
                                                {answer._idUser.role.toUpperCase()}
                                            </Text>
                                        </Box>
                                    </HStack>
                                    <Text bgColor="#ECF9F9" rounded="md" pt="4%" pb="4%" pl="2%">
                                        {answer.reply}
                                    </Text>
                                </Box>
                            ))}
                            <Answers />
                        </Box>
                    </Grid>
                </Card>
            </Box>
        </>
    );
};

export default DoubtDetail;
