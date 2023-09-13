import { Spinner, Box, Image, Text, Tag, Grid, Card } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getImageURL from "../../app/utils";
import { motion } from "framer-motion";
import "./SingleDoubt.scss";

const SingleDoubt = () => {
    const { doubts, isLoading } = useSelector((state) => state.doubts);
    const { user } = useSelector((state) => state.auth);
    console.log(doubts);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Grid templateColumns="repeat(5, 1fr)" gap="4" pl="10%" pr="10%">
            {doubts.map((doubt) => (
                <Link to={"/doubts/" + doubt._id} key={doubt._id}>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Card p="4" className="doubt-card">
                            {user && (
                                <>
                                    <Box pb="6%">
                                        <Text as="b" fontSize="1.1em">
                                            {user.name}
                                        </Text>
                                        <Text fontSize="0.8em" color="gray.500">
                                            {user.role.toUpperCase()}
                                        </Text>
                                        {user.image && <Image src={getImageURL(user.image)} alt={user.name} h="50px" w="50px" objectFit="cover" borderRadius="full" />}
                                    </Box>
                                </>
                            )}
                            <Box className="image-container">
                                <Image src={getImageURL(doubt.imagePath)} h="200px" w="100%" objectFit="cover" borderRadius="8px" className="image-zoom" />
                            </Box>
                            <Text fontSize="xl" mt="2" pt="3%" pb="3%">
                                <Tag colorScheme="teal">{doubt.topic ? doubt.topic.toUpperCase() : ""}</Tag>
                            </Text>
                            <Text>{doubt.question}</Text>
                        </Card>
                    </motion.div>
                </Link>
            ))}
        </Grid>
    );
};

export default SingleDoubt;
