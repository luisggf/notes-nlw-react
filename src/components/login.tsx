import { useState } from "react";
import { SignIn } from "./signin";

interface User {
  OnUserLogin: () => void;
}

export function LogIn({ OnUserLogin }: User) {
  const [Signed, setSigned] = useState(false);

  function HandleSignedFlag(Signed: boolean) {
    if (Signed) {
      setSigned(false);
      return;
    }
    setSigned(true);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {Signed ? (
        <SignIn
          HandleSignedFlag={() => {
            HandleSignedFlag(Signed);
          }}
        />
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="./public/favicon.png"
              alt="NLW Expert Login"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-300">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium leading-6 text-slate-300">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="user"
                    name="user"
                    type="user"
                    autoComplete="user"
                    required
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-slate-300"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-slate-500 hover:text-slate-400"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-slate-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={OnUserLogin}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  Log in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member yet?{" "}
              <button
                onClick={() => {
                  HandleSignedFlag(Signed);
                }}
                className="font-semibold leading-6 text-slate-500 hover:text-slate-400"
              >
                Sign in
              </button>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
