import { A, useNavigate } from "@solidjs/router";

export default () => {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    // ambil data nama, email, password, sama confirm password
    const form = e.currentTarget;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    const userConfirmPassword = form.confirmpassword.value;

    if (userPassword !== userConfirmPassword) {
      alert("Password mismatch");
      return;
    }

    // kirim post register
    const response = await fetch('http://localhost:3001/api/register', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      })
    });

    if (response.ok) {
      console.log("RESPONSE OK")
      alert("Succesfully registered!")
      navigate("/login")
    } else {
      alert("Register failed!")
      return;
    }
  }

  return (
    <>
      <div class="flex h-screen">
        {/* kiri */}
        <div class="relative w-1/2">
          <div class="absolute inset-0 z-10 flex items-center justify-center">
            <h1 class="text-6xl font-extrabold tracking-widest text-white drop-shadow-lg">
              REGISTER
            </h1>
          </div>

          <img
            src="/src/img/login.png"
            alt="Register"
            class="h-full w-full object-cover opacity-70"
          />
        </div>

        {/* kanan */}
        <div class="flex w-1/2 items-center justify-center bg-indigo-50 p-20">
          <div class="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-10 shadow-lg">
            <h2 class="mb-1 text-3xl font-bold text-indigo-700">
              Register Account
            </h2>

            <p class="mb-8 text-sm text-gray-500">
              Create new account to start using Eventify
            </p>

            <form class="space-y-5" onSubmit={handleRegister}>
              <div>
                <label class="mb-2 block text-sm font-medium text-indigo-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="your full name"
                  class="w-full rounded-xl border border-indigo-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-indigo-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  class="w-full rounded-xl border border-indigo-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-indigo-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="your password"
                  class="w-full rounded-xl border border-indigo-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-indigo-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="your password (again)"
                  class="w-full rounded-xl border border-indigo-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <button
                type="submit"
                class="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Register
              </button>
            </form>

            <p class="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <A
                href="/login"
                class="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Login
              </A>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
