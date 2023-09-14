import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import getImageURL from "../../app/utils";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

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
                            <HStack>
                                <Image src={getImageURL(user.avatar)} alt="users avatar" borderRadius="50%" w="50px" />
                                <Link to="/profile">
                                    <Text as="b">{user.name}</Text>
                                </Link>
                            </HStack>
                            <Button colorScheme="teal" onClick={handleLogout}>
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
