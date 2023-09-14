import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/doubts/doubtsSlice";
import TeacherDoubts from "../TeacherDoubts/TeacherDoubts";

const Teacher = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []);
    return (
        <div>
            Teacher Profile
            <TeacherDoubts />
        </div>
    );
};

export default Teacher;
