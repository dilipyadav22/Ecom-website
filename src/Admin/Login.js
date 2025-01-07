import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = ({ onclose, data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [adminSignUp, setAdminSignUp] = useState(true);
  const [messageError, setMessageError] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handelButtonSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setMessageError(message);
    if (message) return;

    if (!adminSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
             const{uid , email, displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));

            // ...
          }).catch((error) => {
            setMessageError(error.message);
            // ...
          });
    })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessageError(errorCode + "-" + errorMessage);
        });
    } 
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessageError(errorCode + "-" + errorMessage);
        });
    }
  };

  const handelButton = () => {
    setAdminSignUp(!adminSignUp);
 
    
  };

  const handel = (e) => {
    if (e.target.id === "wraper") onclose();
  };
  return (
    <section  id="wraper"
      className=" fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm
                flex justify-center  "
      onClick={handel}
    >
      <div className=" w-1/2  bg-white container mx-auto grid-rows-2 ">
        <h1 className=" text-white  text-lg text-center font-medium text-gray  px-2 mt-3 absolute   h-3  ">
          Admin Panel
        </h1>
        <form className=" mt-6" onSubmit={(e) => e.preventDefault()}>
          <div
            className="grid grid-cols-1
                            md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1
                            max-w-sm mx-auto  "
          >
            <div className="  px-2 grid grid-rows-8 grid-flow-col grid-cols-1 my-5 gap-5 absolute items-center justify-self-center  ">
              <h1 className=" text-2xl  relative">
                {adminSignUp ? "Sign IN" : "Sign Up"}
              </h1>
              <button
                className=" absolute  text-2xl place-self-start right-0  p-3 "
                onClick={() => onclose()}
              >
                X
              </button>
              {!adminSignUp && (
                <input
                  type="text"
                  ref={name}
                  name="fullname"
                  placeholder="Enter your Full Name"
                  className=" bg-gray-600 px-4 py-4 rounded-md text-white"
                />
              )}
              <input
                ref={email}
                className="bg-gray-600 px-4 py-4 rounded-md  text-white "
                name="email"
                type="email"
                placeholder="Enter Your email"
              />
              <input
                ref={password}
                className="bg-gray-600 px-4 py-4 rounded-md  text-white"
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />

              <button
                className="px-3 py-3 bg-red-500 rounded-lg"
                onClick={handelButtonSubmit}
              >
                
                {adminSignUp ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-red-500 px-4 font-medium text-sm">
                {messageError}
              </p>

              <p className="px-3">
                {adminSignUp
                  ? "Create an new account Click here "
                  : "Already having an account"}
                👉
                <button
                  className="text-bold hove:text-xl hover:text-blue-400"
                  onClick={handelButton}
                >
                  {adminSignUp ? "Signup" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
