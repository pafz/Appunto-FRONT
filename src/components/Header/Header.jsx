import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Box w="40vh">
                <Link to="/">
                    <Image src="src/assets/appunto.svg" pl="18vh" mt="4vh" />
                </Link>
            </Box>

            <Box pr="10%" pt="3%">
                {user ? (
                    <Flex alignItems="center">
                        <HStack spacing={20}>
                            <Link to="/">
                                <Text fontSize="1.1em">Inicio</Text>
                            </Link>
                            <Link to="/doubts">
                                <Text fontSize="1.1em">Dudas</Text>{" "}
                            </Link>
                            <Link to="/profile">{user.name}</Link>
                            <Button colorScheme="teal" onClick={() => dispatch(logout())}>
                                Cerrar sesión
                            </Button>
                        </HStack>
                    </Flex>
                ) : (
                    <HStack spacing={4}>
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">
                            <Button colorScheme="teal">Registrarse</Button>
                        </Link>
                    </HStack>
                )}
            </Box>
        </Flex>
    );
};

export default Header;
