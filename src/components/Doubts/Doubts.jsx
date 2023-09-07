import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const Doubts = () => {
    const [formData, setFormData] = useState({
        topic: "",
        question: "",
    });

    const dispatch = useDispatch();
    const toast = useToast();

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
                topic,
                question,
            })
        );
    };

    return (
        <div>
            Posts
            <SingleDoubt />
        </div>
    );
};

export default Doubts;
