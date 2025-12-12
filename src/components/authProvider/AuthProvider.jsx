import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function Authprovider({children}){
    const [user ,setuser] = useState(null);

    useEffect(()=>{
        const user = localStorage.getItem("user");
        if(user){
            setuser(JSON.parse(user));
        }
    },[])
    return(
        <AuthContext.Provider value={{user,setuser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authprovider;