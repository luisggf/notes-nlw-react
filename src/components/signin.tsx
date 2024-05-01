import logo from "../assets/double-arrow-left-icon.svg";

interface User {
  HandleSignedFlag: () => void;
}

export function SignIn({ HandleSignedFlag }: User) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-0 items-center">
          <div className="flex justify-center">
            <img
              className="h-10"
              src="./public/favicon.png"
              alt="NLW Expert Login"
            />
          </div>
          <div className="flex justify-between">
            <button
              className="hover:default-2 hover:default-lime-400 items mt-10"
              type="button"
              onClick={HandleSignedFlag}
            >
              <img
                src={logo}
                className="w-4 tracking-tight logo border-none outline-none"
                alt="Return to Log in page"
              />
            </button>
            <h2 className="mt-10  text-2xl font-bold leading-9 tracking-tight text-slate-300">
              Create an Account
            </h2>
            <div></div>
          </div>
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
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
