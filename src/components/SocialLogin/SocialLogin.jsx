import { useContext } from "react";
import {FcGoogle} from "react-icons/fc"
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider/AuthanticationProvider";
import useAxios from "../../hooks/useAxios/useAxios";

const SocialLogin = () => {
    const{socilaLogin, google, successToast, errorToast} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axios = useAxios();
    const handlePopup = (provider) => { 
        socilaLogin(provider)
        .then(() => { 
            axios.post('/jwt')
            // .then(res => {console.log(res.data)})
            navigate(location?.state ? location.state : "/")
            successToast('Successfully Loged in!') })
        .catch(() => {
            errorToast(
                'Login Faild!'
            )})
     }
    return (
        <div className=" mt-4">
            <button onClick={() => handlePopup(google)}  className="btn w-full bg-gradient-to-r from-[#be006b] to-blue-700  bg-clip-text flex items-center text-white"> <FcGoogle className=" text-xl"></FcGoogle>With Google</button>

        </div>
    );
};

export default SocialLogin;