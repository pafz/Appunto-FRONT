import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, FormLabel, Grid, Input, Text, Textarea, useToast, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import SingleDoubt from "../SingleDoubt/SingleDoubt";
import { createDoubt } from "../../features/doubts/doubtsSlice";
import { getAll } from "../../features/doubts/doubtsSlice";
import "./Doubts.scss";

const Doubts = () => {
    const [formData, setFormData] = useState({
        topic: "",
        question: "",
        image: "",
    });

    const dispatch = useDispatch();
    const toast = useToast();
    const { isSuccess, isError, message } = useSelector((state) => state.doubts);

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Éxito",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
        if (isError) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }, [message, isSuccess, isError, toast]);

    useEffect(() => {
        dispatch(getAll());
    }, []);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createDoubt({
                topic: formData.topic,
                question: formData.question,
            })
        );
        setFormData({ topic: "", question: "" });
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <Box as="aside" ml="8%" mb="5%" mt="4%">
                <Button colorScheme="teal" onClick={() => setIsDrawerOpen(true)}>
                    Sube tu duda!
                </Button>
            </Box>
            <SingleDoubt />
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} size="md">
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <Text p="10%"> Aquí puedes subir tu duda. Adjuntar una imagen puede ayudar a tus compis a entender mejor tu consulta:</Text>
                        <DrawerBody>
                            <Box>
                                <form onSubmit={onSubmit}>
                                    <Box p="4%">
                                        <FormLabel>Tópico *</FormLabel>
                                        <Input type="text" name="topic" placeholder="Sobre qué tema vas a preguntar?" value={formData.topic} onChange={onChange} />
                                    </Box>
                                    <Box p="4%">
                                        <FormLabel>Pregunta *</FormLabel>
                                        <Textarea name="question" placeholder="Escribe aquí tu duda" value={formData.question} onChange={onChange} />
                                    </Box>

                                    <Box p="4%">
                                        <FormLabel>Imagen (opcional)</FormLabel>
                                        <Input type="file" name="image" value={formData.image} onChange={onChange} />
                                    </Box>
                                    <Button m="4%" w="92%" colorScheme="teal" type="submit">
                                        Enviar
                                    </Button>
                                </form>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default Doubts;
