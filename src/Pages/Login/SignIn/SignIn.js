import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignIn = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let path = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(path, { replace: true });
    }

    if (user) {
        console.log(user.user.email);
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSignIn} className="w-50 mx-auto">

                <div className="row mb-3">
                    <label for="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" className="form-control" id="inputEmail4" placeholder='your email' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="inputPassword3" placeholder='password' required />
                    </div>
                </div>

                <div className='row mb-3 w-50 mx-auto'>
                    <input type="submit" className="  btn btn-primary" value="Sign In" />
                </div>

            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;