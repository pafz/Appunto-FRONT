import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, FormLabel, Grid, Input, Text, Textarea, useToast, VStack } from "@chakra-ui/react";
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

    return (
        <>
            <Grid templateColumns="1fr 2fr" gap={2}>
                <Box as="aside" ml="10%">
                    <Text>Cargar una Duda</Text>
                    <Card variant="flushed" boxShadow="2xl" w="80%" h="100%">
                        <form onSubmit={onSubmit}>
                            <Box p="7%">
                                <FormLabel>Tópico *</FormLabel>
                                <Input type="text" name="topic" value={formData.topic} onChange={onChange} />
                            </Box>
                            <Box p="7%">
                                <FormLabel>Pregunta *</FormLabel>
                                <Textarea name="question" value={formData.question} onChange={onChange} />
                            </Box>

                            <Box p="7%">
                                <FormLabel>Imagen (opcional)</FormLabel>

                                <Input type="file" name="image" value={formData.image} onChange={onChange} />
                            </Box>
                            <Button m="7%" colorScheme="teal" type="submit">
                                Enviar
                            </Button>
                        </form>
                    </Card>
                </Box>
                <SingleDoubt />
            </Grid>
        </>
    );
};

export default Doubts;
