import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deletePost } from "../../features/posts/postsSlice";

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
                                dispatch(deletePost(doubt.id));
                            }}
                        >
                            <FaTrash />
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TeacherDoubts;
