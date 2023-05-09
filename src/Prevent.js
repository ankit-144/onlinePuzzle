import { useNavigate, Navigate } from "react-router-dom";

const Prevent = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const visited = JSON.parse(localStorage.getItem("visited"));
  return visited ? (
    user ? (
      children
    ) : (
      <Navigate to="/login" />
    )
  ) : (
    <Navigate to="/welcome" />
  );
};

export default Prevent;
