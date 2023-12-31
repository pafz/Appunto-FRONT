import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(formData));

            toast({
                title: "Inicio de sesión exitoso",
                description: "¡Bienvenido de nuevo!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            navigate("/");
        } catch (error) {
            toast({
                title: "Error de inicio de sesión",
                description: "Verifica tus credenciales e intenta nuevamente.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card w="30%" p="3%" mt="10%" ml="35%" boxShadow="2xl" bg="" mb="16%">
                    <form onSubmit={onSubmit}>
                        <VStack spacing="4" align="center">
                            <Text color="teal" as="b" fontSize="1.2em" mb="3%">
                                Bienvenid@
                            </Text>
                            <Input type="email" name="email" placeholder="email@edem.es" value={email} onChange={onChange} />
                            <Input type="password" name="password" placeholder="password" value={password} onChange={onChange} />
                            <Button mt="8%" colorScheme="teal" type="submit">
                                Iniciar sesión
                            </Button>
                        </VStack>
                    </form>
                </Card>
            </motion.div>
        </>
    );
};

export default Login;
