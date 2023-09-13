import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box h="100%">
            <Grid templateColumns="repeat(2,1fr)" gap="4" pl="10%" pr="10%" pb="6%" mt="3%">
                <Box mt="20%">
                    <Text as="b" fontSize="3.3em">
                        Pregunta.
                        <br /> Colabora. Aprende.
                    </Text>
                    <Text w="50%">Appunto ofrece una forma eficaz y potente de gestionar las dudas de los alumnos.</Text>{" "}
                    <Link to="/login">
                        <motion.a whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}} />
                        <Button mt="8%" colorScheme="teal">
                            Empezar
                        </Button>
                    </Link>
                </Box>{" "}
                <Link to="/doubts">
                    <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                        <Box>
                            <Image src="src/assets/image_home.png"></Image>
                        </Box>{" "}
                    </motion.div>
                </Link>
            </Grid>
        </Box>
    );
};

export default Home;
