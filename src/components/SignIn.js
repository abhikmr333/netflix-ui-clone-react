import { Link } from "react-router-dom";
import { validateSignInForm } from "../utils/validate";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [validationMessage, setValidationMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = () => {
    if (validationMessage) setValidationMessage(null);
    //current.value will have the value of that field
    const { value: emailValue } = email.current;
    const { value: passwordValue } = password.current;
    //validating
    const result = validateSignInForm(emailValue, passwordValue);

    if (result) setValidationMessage(result);
    else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="mb-12 flex h-[36rem] flex-col justify-between bg-[rgb(0,0,0,0.80)] p-24">
        <h1 className="text-4xl font-bold text-white">Sign In</h1>
        {/* when you submit the form onSubmit gets triggered so form submission can be stopped this way as well */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-8 flex flex-col items-center"
        >
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
            Sign In
          </button>
        </form>
        <section className="">
          <p className="text-center text-white">
            New to ABCDFLIX?
            <Link className="hover:font-bold" to="/signup">
              {" "}
              Sign up now
            </Link>
            .
          </p>
        </section>
      </section>
    </main>
  );
};

export default SignIn;
