import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';


const Login = () => {
    const { handleLoginWithEmail, setUser, setError, saveUser, setIsLoading, signInUsingGoogle, takingEmail, takingPassword, error } = useAuth();
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const useHandleLoginWithEmail = e => {
        setIsLoading(true);
        e.preventDefault();
        handleLoginWithEmail()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const UseSignInUsingGoogle = () => {
        setIsLoading(true)
        signInUsingGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                // save user to the database
                saveUser(user.email, user.displayName, "PUT");
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <>
            <div style={{ backgroundImage: `url('https://i.ibb.co/hZBWq0q/bkg-static5-elomus3.jpg')` }}>
                <Header></Header>
                <div className="py-5 mt-5 text-white">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="login-form quality">
                <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={useHandleLoginWithEmail} >
                        <input onBlur={takingEmail} className="input" type="email"
                            placeholder="Your Email" />
                        <br />
                        <input onBlur={takingPassword} className="input" type="password"
                            placeholder="Password" />
                        <div className="text-danger">{error}</div>
                        <br />
                        <input className="btn btn-primary shadow rounded-pill text-white px-4" type="submit" value="Log In" />
                    </form>
                    <p className="my-4">New to Elomus? <br /> <Link to="/register">Click to create account</Link></p>
                    <div>Or</div>
                    <hr />
                    <button onClick={UseSignInUsingGoogle} className="btn btn-primary shadow  rounded-pill px-4 text-white"><i className="fab fa-google me-3"> Google Sign In</i></button>
                </div>
            </div >
        </>
    );
};

export default Login;