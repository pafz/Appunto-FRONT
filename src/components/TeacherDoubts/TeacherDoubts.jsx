import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDoubt } from "../../features/doubts/doubtsSlice";

const TeacherDoubts = () => {
    const { doubts } = useSelector((state) => state.doubts);
    const dispatch = useDispatch();
    return (
        <div>
            {doubts.map((doubt) => {
                return (
                    <div key={doubt.id}>
                        <br />
                        <span>{doubt.topic}</span>
                        <span>{doubt.question}</span>
                        <span
                            onClick={async () => {
                                dispatch(deleteDoubt(doubt.id));
                            }}
                        >
                            <FaTrashAlt />
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TeacherDoubts;
