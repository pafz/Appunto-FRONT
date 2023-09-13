import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box>
            <Grid templateColumns="repeat(2,1fr)" gap="4" pl="10%" pr="10%" pb="6%" mt="3%">
                <Box mt="20%">
                    <Text as="b" fontSize="3.3em">
                        Pregunta.
                        <br /> Colabora. Aprende.
                    </Text>
                    <Text w="50%">Appunto oferece una forma eficaz y potente de gestionar las dudas de los alumnos.</Text>
                    <Link to="/login">
                        <Button mt="8%" colorScheme="teal">
                            Empezar
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Image src="src/assets/image_home.png"></Image>
                </Box>
            </Grid>
        </Box>
    );
};

export default Home;
