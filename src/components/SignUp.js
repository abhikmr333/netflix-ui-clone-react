import { Link } from "react-router-dom";
import { validateSignUpForm } from "../utils/validate";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [validationMessage, setValidationMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    const { value: emailValue } = email.current;
    const { value: passwordValue } = password.current;
    const { value: nameValue } = name.current;

    const result = validateSignUpForm(emailValue, passwordValue);

    if (result) setValidationMessage(result);
    else {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameValue,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Balaeniceps_rex.jpg/330px-Balaeniceps_rex.jpg",
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="mb-12 flex h-[36rem] flex-col justify-between bg-[rgb(0,0,0,0.80)] p-24">
        <h1 className="mb-3 text-4xl font-bold text-white">Sign Up</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-3 flex flex-col items-center"
        >
          <label className="text-white" htmlFor="username">
            Username
          </label>
          <input
            className="h-14 w-72 rounded-md border-[3px] border-slate-800 bg-[#141210] text-white"
            id="username"
            type="text"
            ref={name}
          />
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            className="h-14 w-72 rounded-md border-[3px] border-slate-800 bg-[#141210] text-white"
            id="email"
            type="text"
            ref={email}
          />
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            className="h-14 w-72 rounded-md border-[3px] border-slate-800 bg-[#141210] text-white"
            id="password"
            type="password"
            ref={password}
          />
          {validationMessage && (
            <p className="font-semibold text-red-500">{validationMessage}</p>
          )}
          <button
            onClick={handleValidation}
            className="mt-3 h-10 w-72 rounded-md bg-[#e50914] text-white hover:bg-[#c11119]"
          >
            Sign Up
          </button>
        </form>
        <section className="">
          <p className="text-center text-white">
            Have an account?
            <Link className="hover:font-bold" to="/">
              {" "}
              Sign in
            </Link>
            .
          </p>
        </section>
      </section>
    </main>
  );
};

export default SignUp;
