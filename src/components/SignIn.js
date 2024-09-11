import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <section className="flex h-[36rem] flex-col justify-between bg-[rgb(0,0,0,0.75)] p-24">
        <h1 className="text-4xl font-bold text-white">Sign In</h1>
        <form className="mb-8 flex flex-col items-center">
          <label className="text-white" htmlFor="email">
            Email or mobile number
          </label>
          <input
            className="h-14 w-72 rounded-md border-[3px] border-slate-800 bg-[#141210] text-white"
            id="email"
            type="text"
          />
          <label className="text-white" htmlFor="password">
            Password
          </label>
          <input
            className="h-14 w-72 rounded-md border-[3px] border-slate-800 bg-[#141210] text-white"
            id="password"
            type="password"
          />
          <button className="mt-3 h-10 w-72 rounded-md bg-[#e50914] text-white hover:bg-[#c11119]">
            Sign In
          </button>
        </form>
        <section className="">
          <p className="text-center text-white">
            New to Netflix?
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
