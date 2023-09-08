import { Navigate } from "react-router-dom";

const TeacherZone = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.role == "teacher" ? children : <Navigate to="/" />;
};

export default TeacherZone;
