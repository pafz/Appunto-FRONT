import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Box pl="30%">
            <Image w="60%" src="src/assets/404.svg" />

            <Button colorScheme="teal" ml="20%">
                <Link to="/">Volver al Inicio</Link>
            </Button>
        </Box>
    );
};

export default ErrorPage;
