import React, { useEffect } from "react";

import { getAll } from "../../features/doubts/doubtsSlice";
import { useDispatch } from "react-redux";
import SingleDoubt from "../SingleDoubt/SingleDoubt";

const Doubts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, []);

    return (
        <div>
            Posts
            <SingleDoubt />
        </div>
    );
};

export default Doubts;
