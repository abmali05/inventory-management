import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMsg;

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let path = location.state?.from?.pathname || "/";


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(path, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/signup');
    }

    if (error) {
        errorMsg = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        console.log(user.user.email);
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetUserPass = async () => {

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset link sent');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='row mt-5 w-50 mx-auto'>
            <h2 className='text-center mb-3'>Please Sign In</h2>
            <form onSubmit={handleSignIn} className=" ">

                <div className="row mb-3">
                    <label for="inputEmail4" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" ref={emailRef} name="email" className="form-control" id="inputEmail4" placeholder='your email' required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" ref={passwordRef} name="password" className="form-control" id="inputPassword3" placeholder='password' required />
                    </div>
                </div>

                <div className='row mb-3 w-50 mx-auto'>
                    <input type="submit" className="  btn btn-danger" value="Sign In" />
                </div>

            </form>
            {errorMsg}

            <SocialLogin></SocialLogin>
            <p>New user? <Link to="/signup" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Sign Up</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetUserPass}>Reset Password</button> <small><i>Enter email field only</i></small></p>
            <ToastContainer />
        </div>
    );
};

export default SignIn;