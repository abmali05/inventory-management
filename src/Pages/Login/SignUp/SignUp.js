import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const pageNavigate = useNavigate();


    if (user) {
        console.log('user', user?.user?.displayName);
        console.log('user', user?.user?.email);
    }


    if (loading || updating) {
        return <Loading></Loading>
    }


    const handleSignUp = async (event) => {
        event.preventDefault();
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        console.log('Updated profile');
        pageNavigate('/home');
    }

    return (
        <div>
            <form onSubmit={handleSignUp} className="w-50 mx-auto">
                <div className="row mb-3">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control" id="inputEmail3" placeholder='your name' />
                    </div>
                </div>
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
                    <input type="submit" className="  btn btn-primary" value="Sign Up" />
                </div>

            </form>
        </div>
    );
};

export default SignUp;