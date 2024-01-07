import { Navigate, useLocation } from "react-router-dom";
import useAuthantication from "../../hooks/useAuthan/useAuthantication";

const PrivetRoute = ({children}) => {
    const {user,isLoading} = useAuthantication();
    const localtion = useLocation();

        if (isLoading) {
            return <div className=" flex justify-center items-center h-full"><span className="loading loading-spinner loading-lg mt-44"></span></div>
        }

        if (user) {
            return children;
        }
    
    return <Navigate state={localtion.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;