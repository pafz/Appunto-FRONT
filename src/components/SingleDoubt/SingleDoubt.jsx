import { Spinner } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleDoubt = () => {
    const { doubts, isLoading } = useSelector((state) => state.doubts);

    if (isLoading) {
        return <Spinner />;
    }
    console.log(doubts);
    return (
        <div>
            {doubts.map((doubt) => (
                <Link to={"/doubts/" + doubt._id} key={doubt._id}>
                    <img src={doubt.imagePath} />
                    <p>{doubt.topic}</p>
                    <p>{doubt.question}</p>
                </Link>
            ))}
        </div>
    );
};

export default SingleDoubt;
