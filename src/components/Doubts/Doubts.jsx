import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoubt } from "./doubtSlice";
import { notification } from "antd";

const CreateDoubtComponent = () => {
    const [formData, setFormData] = useState({
        topic: "",
        question: "",
    });

    const { topic, question } = formData;
    const { message, isSuccess, isError } = useSelector((state) => state.doubt);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            notification.success({
                message: message,
            });
            // Puedes redirigir o hacer algo después del éxito si es necesario
        }
        if (isError) {
            notification.error({
                message: message,
            });
        }
    }, [message, isSuccess, isError]);

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
                topic,
                question,
            })
        );
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="topic" value={topic} onChange={onChange} placeholder="Tema" />
            <input type="text" name="question" value={question} onChange={onChange} placeholder="Pregunta" />
            <button type="submit">Crear Duda</button>
        </form>
    );
};

export default CreateDoubtComponent;
