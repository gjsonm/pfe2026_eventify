import { A, useNavigate } from "@solidjs/router";
import { useAuthContext } from "../src/context/AuthContext";
import { Match, Switch } from "solid-js";

export default () => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  async function handleLogin(e) {
    e.preventDefault()
    // ambil dlu data email sama password
    const form = e.currentTarget;
    const userEmail = form.email.value;
    const userPassword = form.password.value;

    // kirim post login
    const response = await fetch('http://localhost:3001/api/login', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    });

    const user = await response.json();
    // kalo berhasil login, masukin ke session storage
    if (!response.ok) {
      alert(user.message)
      return;
    }
    console.log(user)
    sessionStorage.setItem("user", JSON.stringify(user));

    // masukkin jg ke context auth, biar bs dipake sama page laen
    auth.setUser(user);

    // redirect ke dashboard (ref https://docs.solidjs.com/solid-router/reference/primitives/use-navigate)
    navigate("/");
  }


  return (
    <Switch fallback={navigate("/")}>
      <Match when={!auth.user()}>
        <>
          <div class="flex justify-between h-screen">
            {/* ini untuk bagian kiri (gambar) */}
            <div class="w-1/2 relative">
              <div class="absolute inset-0 z-10 flex items-center justify-center">
                <h1 class="text-white text-6xl font-extrabold tracking-widest drop-shadow-lg">
                  LOGIN
                </h1>
              </div>

              <img
                src={`../src/img/login.png`}
                alt="Gambar Event"
                class="w-full h-full object-cover z-1 opacity-70"
              />
            </div>

            {/* ini form di sebelah kanan nya */}
            <div class="flex w-1/2 items-center justify-center bg-indigo-50 p-20">
              <div class="p-10 rounded-2xl shadow-lg max-w-md w-full bg-white">
                <h2 class="mb-1 text-3xl font-bold text-indigo-700">
                  Welcome!
                </h2>
                <p class="mb-8 text-sm text-gray-500">
                  Log in to Eventify using your account
                </p>

                {/* untuk sementara lgsg ke dasbor, next akan ada otentikasi */}
                <form class="space-y-5" onSubmit={handleLogin}>
                  <div>
                    <label class="mb-2 block text-sm font-medium text-indigo-700">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="youremailaddress@email.com"
                      class="w-full rounded-xl border border-indigo-200 px-4 py-3 outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-medium text-indigo-700">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      placeholder="yourpassword"
                      class="w-full rounded-xl border px-4 py-3 outline-none focus:border-indigo-500 border-indigo-200"
                    />
                  </div>

                  <button
                    type="submit"
                    class="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:opacity-90"
                  >
                    Login
                  </button>
                </form>
                <p class="mt-6 text-center text-sm text-gray-600">
                  Don't have account?{" "}
                  <A
                    href="/register"
                    class="font-semibold text-black text-indigo-700"
                  >
                    Register
                  </A>
                </p>
              </div>
            </div>
          </div>
        </>
      </Match>
    </Switch>
  );
};
