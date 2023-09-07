import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import SingleDoubt from "../SingleDoubt/SingleDoubt";
import { createDoubt } from "../../features/doubts/doubtsSlice";

const Doubts = () => {
    const [formData, setFormData] = useState({
        topic: "",
        question: "",
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
        <div>
            <h2>Cargar una Duda</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="topic">Tema:</label>
                    <input type="text" name="topic" value={formData.topic} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="question">Pregunta:</label>
                    <textarea name="question" value={formData.question} onChange={onChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <SingleDoubt />
        </div>
    );
};

export default Doubts;
