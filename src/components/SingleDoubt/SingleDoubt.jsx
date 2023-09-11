import { Spinner, Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleDoubt = () => {
    const { doubts, isLoading } = useSelector((state) => state.doubts);
    console.log(doubts);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Flex flexWrap="wrap">
            {doubts.map((doubt) => (
                <Box key={doubt._id} borderWidth="1px" borderRadius="lg" p="4" m="2">
                    <Link to={"/doubts/" + doubt._id}>
                        <Image src={doubt.imagePath} maxW="100%" />
                        <Text fontSize="xl" mt="2">
                            {doubt.topic}
                        </Text>
                        <Text>{doubt.question}</Text>
                    </Link>
                </Box>
            ))}
        </Flex>
    );
};

export default SingleDoubt;
