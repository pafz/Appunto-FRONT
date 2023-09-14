import React, { useState } from "react";
import { Textarea, IconButton, HStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createAnswer } from "../../features/doubts/doubtsSlice";
import { useParams } from "react-router-dom";

const Answers = ({ answers }) => {
    const { _id } = useParams();
    const [newAnswer, setNewAnswer] = useState("");
    const dispatch = useDispatch();

    const handleCreateAnswer = async () => {
        if (!newAnswer) {
            return;
        }
        try {
            const answerData = {
                reply: newAnswer,
                likes: 0,
                _idDoubt: _id,
            };
            const response = await dispatch(createAnswer(answerData));
            console.log("Respuesta creada:", response);
            setNewAnswer("");
        } catch (error) {
            console.error("Error al crear la respuesta:", error);
        }
    };

    return (
        <HStack>
            <Textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} placeholder="Escribe aquí la respuesta" rows={2} mt={7} />
            <IconButton icon={<FaPaperPlane />} colorScheme="teal" aria-label="Enviar respuesta" onClick={handleCreateAnswer} mt="7" p="31px" fontSize="1.9em" />
        </HStack>
    );
};

export default Answers;
