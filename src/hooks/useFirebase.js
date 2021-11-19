import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import swal from "sweetalert";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const reload = () => {
        window.location.reload();
    }
    const url = `https://glacial-sands-61817.herokuapp.com/users/${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const takingName = e => {
        setName(e.target.value);
    }

    const takingEmail = e => {
        setEmail(e.target.value);
    }

    const takingPassword = e => {
        setPassword(e.target.value);
    }


    const handleLoginWithEmail = e => {

        return signInWithEmailAndPassword(auth, email, password)

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://glacial-sands-61817.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }



    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' })
            .then(() => {

            })
            .catch(error => {
                setError(error);
            })
    }


    const handleRegistration = e => {
        setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // save user to the database
                saveUser(email, name);
                setError('');
                setUserName();
                reload();
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    }


    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }




    return {
        user,
        admin,
        isLoading,
        error,
        saveUser,
        setUser,
        setError,
        signInUsingGoogle,
        setIsLoading,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        takingEmail,
        takingPassword,
        takingName,
        handleLoginWithEmail
    }
}

export default useFirebase;