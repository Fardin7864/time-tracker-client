import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../providers/authProvider/AuthanticationProvider";
import SocialLogin from "../../common/SocialLogin/SocialLogin";
import useAxios from "../../hooks/useAxios/useAxios";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const axios = useAxios();


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] =useState('');
    const{successToast, faildToast, login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // Form data input
    const handleFormData = (e) => { 
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        })
     }

    // form submit 
    const handleSubmit = (e) => { 
        setError('')
        e.preventDefault();
        if(formData.password.length < 6 || !/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/.test(formData.password)) {
            setError("Invalid Password!")
            faildToast()
            return;
        }else{
            login(formData.email, formData.password)
            .then(() => { 
                axios.post('/jwt')
                .then(res => {console.log(res.data)})
                navigate(location?.state ? location.state : "/")
                successToast() })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/invalid-login-credentials).") {
                    setError("Invalid email and password!")
                }
                faildToast()})
        }
     }


    return (
        <div className=" flex flex-col items-center pb-32 ">
        <div className="mt-7 shadow-2xl bg-gradient-to-b from-[#bb2845] via-purple-600 to-purple-700 border-2  p-5 text-b md:w-[500px] w-full rounded-xl px-9 py-11">
            <h3 className=" text-4xl font-bold text-white pb-5">Log In!</h3>
            <form onSubmit={handleSubmit}>
                <div className=" flex flex-col gap-3 mt-3">
                    <label htmlFor="email" className="text-xl pl-3 text-white">Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormData}
                    required
                    className=" w-full text-xl py-2 bg-gray-100 border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
                    />
                </div>
                <div className=" flex flex-col gap-3 mt-3">
                    <label htmlFor="password" className="text-xl pl-3 text-white">Password</label>
                    <div className=" flex items-center">
                    <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleFormData}
                    required
                    className=" w-full text-xl py-2 bg-gray-100 border-2 border-gray-500 rounded-lg pl-4 [#be006b]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className=" absolute right-14 md:right-[180px] lg:right-[570px]">
                        {showPassword ? <AiFillEyeInvisible className=" text-black text-xl"/> : <AiFillEye className=" text-black text-xl"/>}
                    </button>
                    </div>
                </div>
                {
                    error && <p className=" text-sm text-red-700">{error}</p>
                }
                <div>
                    <button type="submit" className="text-lg text-white font-bold bg-gradient-to-r from-[#be006b] to-[#e33b54] via-[#e33b44] py-3 px-3 rounded-lg w-full mt-4">Submit</button>
                </div>
                <div className=" mt-3 flex items-center justify-center">
                    <p className="text-sm text-white font-medium">Don't have account? <Link to="/signup" className="text-[#fb3158]">Sign Up</Link></p>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    </div>
    );
};

export default Login;