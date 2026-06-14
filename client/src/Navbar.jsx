import { A, useNavigate } from "@solidjs/router";
import { useAuthContext } from "./context/AuthContext";
import { Match, Switch } from "solid-js";

export default () => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  async function handleLogout() {
    const response = await fetch("http://localhost:3001/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      auth.setUser(null);
      navigate("/login");
    }
  }

  return (
    <nav class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16 items-center">
          {/* Logo */}
          <div class="flex items-center">
            <A
              href="/"
              class="text-2xl font-black text-indigo-600 flex items-center hover:opacity-90"
            >
              <span>Eventify</span>
            </A>
          </div>

          {/* Menu Navigasi */}
          <div class="flex items-center space-x-8">
            <A
              href="/"
              end
              activeClass="text-indigo-600 font-semibold border-b-2 border-indigo-600 py-5"
              class="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Dashboard
            </A>
            <A
              href="/myevent"
              activeClass="text-indigo-600 font-semibold border-b-2 border-indigo-600 py-5"
              class="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              My Event
            </A>
          </div>

          {/* Kalo misal udh login bakalan muncul nama sama tombol logout, klo blom bakal login sama register*/}
          {/* Link Login dan Register*/}
          <div class="flex items-center space-x-4">
            <Switch fallback={<div>NOTHING</div>}>
              <Match when={!auth.user()}>
                <A
                  href="/login"
                  class="text-gray-600 hover:text-indigo-600 font-medium text-sm px-3 py-2 rounded-lg transition-colors"
                >
                  Login
                </A>
                <A
                  href="/register"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-100"
                >
                  Register
                </A>
              </Match>
              <Match when={auth.user()}>
                <span class="font-medium text-indigo-700">
                  Hi, {auth.user().name}
                </span>

                <button
                  onClick={handleLogout}
                  class="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm shadow-red-100"
                >
                  Logout
                </button>
              </Match>
            </Switch>
          </div>
        </div>
      </div>
    </nav >
  );
};
