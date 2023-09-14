import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDoubt } from "../../features/doubts/doubtsSlice";
import { Box, Button, FormLabel, Input, Text, Textarea, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";

const DoubtUploader = () => {
    const [formData, setFormData] = useState({
        topic: "",
        question: "",
        image: null,
    });

    const dispatch = useDispatch();

    const onChange = (e) => {
        console.log(e);
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const manejarCambioImagen = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createDoubt({
                topic: formData.topic,
                question: formData.question,
                image: formData.image,
            })
        );
        setFormData({ topic: "", question: "", image: null });
        setIsDrawerOpen(false);
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <Box as="aside" ml="10%" mb="5%" mt="4%">
                <Button colorScheme="teal" onClick={() => setIsDrawerOpen(true)}>
                    Sube tu duda!
                </Button>
            </Box>

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
                                        <Input type="file" name="image" onChange={manejarCambioImagen} />
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

export default DoubtUploader;
