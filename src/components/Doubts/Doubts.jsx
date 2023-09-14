import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { getAll } from "../../features/doubts/doubtsSlice";
import SingleDoubt from "../SingleDoubt/SingleDoubt";
import DoubtUploader from "./DoubtUploader";
import "./Doubts.scss";

const Doubts = () => {
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

    return (
        <>
            <DoubtUploader />
            <SingleDoubt />
        </>
    );
};

export default Doubts;
