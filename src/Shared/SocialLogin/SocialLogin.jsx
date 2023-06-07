import { useContext } from "react";
import google from '../../../src/assets/google-signin-button.png'
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                
            })
    }
    return (
        <div>
             <div className="divider"></div>
            <div className="w-full text-center my-4">
               <img onClick={handleGoogleSignIn} src={google} alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;