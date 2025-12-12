import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

function Protectroute({Children}){
    // const navigate = useNavigate();
    const {user,setuser} = useContext(AuthContext);
    if(!user){
        return <Navigate to="/login" replace/>;
    }
    return Children;
}

export default Protectroute;