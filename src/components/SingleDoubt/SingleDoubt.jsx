import { Spinner, Box, Image, Text, Tag, Grid, Card } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getImageURL from "../../app/utils";
import "./SingleDoubt.scss";

const SingleDoubt = () => {
    const { doubts, isLoading } = useSelector((state) => state.doubts);
    const { user } = useSelector((state) => state.auth); // Obtener información del usuario desde el estado de autenticación

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap="4">
            {doubts.map((doubt) => (
                <Link to={"/doubts/" + doubt._id} key={doubt._id}>
                    <Card p="4" className="doubt-card">
                        {/* Mostrar información del usuario */}
                        {user && (
                            <>
                                <Text>{user.name}</Text>
                                <Text>{user.role}</Text>
                                {user.image && <Image src={getImageURL(user.image)} alt={user.name} h="50px" w="50px" objectFit="cover" borderRadius="full" />}
                            </>
                        )}
                        <Box className="image-container">
                            <Image src={getImageURL(doubt.imagePath)} h="200px" w="100%" objectFit="cover" borderRadius="8px" className="image-zoom" />
                        </Box>
                        <Text fontSize="xl" mt="2">
                            <Tag colorScheme="teal">{doubt.topic ? doubt.topic.toUpperCase() : ""}</Tag>
                        </Text>
                        <Text>{doubt.question}</Text>
                    </Card>
                </Link>
            ))}
        </Grid>
    );
};

export default SingleDoubt;
