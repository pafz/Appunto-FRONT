import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/doubts/doubtsSlice";
import { Spinner } from "@chakra-ui/react";

const DoubtDetail = () => {
    const { id } = useParams();

    const { doubt, isLoading } = useSelector((state) => state.doubts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(id));
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <h1>Doubt Detail</h1>
            <h2>{doubt.topic}</h2>
            <p>{doubt.question}</p>
            <p>{doubt.User?.name}</p>
        </div>
    );
};

export default DoubtDetail;
