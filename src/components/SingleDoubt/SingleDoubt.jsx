import { Spinner, Box, Image, Text, Tag, Grid, Card, Divider, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getImageURL from "../../app/utils";
import { motion } from "framer-motion";
import "./SingleDoubt.scss";

const SingleDoubt = () => {
    const { doubts, isLoading } = useSelector((state) => state.doubts);
    const { user } = useSelector((state) => state.auth);
    const [clickCount, setClickCount] = useState(0);
    console.log(doubts);

    const handleIncrementClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap="4" pl="10%" pr="10%">
            {doubts.map((doubt) => (
                <motion.div key={doubt._id} initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Card p="4" w="100%">
                        {user && (
                            <>
                                <HStack pb="6%">
                                    <Box>{user.avatar && <Image src={getImageURL(user.avatar)} alt={user.name} h="50px" w="50px" objectFit="cover" borderRadius="full" />}</Box>
                                    <Box>
                                        <Text as="b" fontSize="1.1em">
                                            {user.name}
                                        </Text>
                                        <Text fontSize="0.8em" color="gray.500">
                                            {user.role.toUpperCase()}
                                        </Text>
                                    </Box>

                                    <Text ml="25%" fontSize="xs" fontWeight="bold">
                                        {clickCount}
                                    </Text>
                                    <Image src="src/assets/logoAppunto.png" alt="Logo de Appunto" onClick={handleIncrementClick} style={{ cursor: "pointer" }} w="35px" />
                                </HStack>
                            </>
                        )}
                        <Link to={"/doubts/" + doubt._id} key={doubt._id}>
                            <Box className="image-container">
                                <Image src={getImageURL(doubt.imagePath)} h="200px" w="100%" objectFit="cover" borderRadius="8px" className="image-zoom" />
                            </Box>
                        </Link>
                        <Text fontSize="xl" mt="2" pt="3%" pb="3%">
                            <Tag colorScheme="teal">{doubt.topic ? doubt.topic.toUpperCase() : ""}</Tag>
                        </Text>
                        <Text>{doubt.question}</Text>
                        <Divider w="90%" p="5%" color="teal.500" alignSelf="center" />
                        {doubt._idAnswer.map((answer) => (
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
                    </Card>
                </motion.div>
            ))}
        </Grid>
    );
};

export default SingleDoubt;
