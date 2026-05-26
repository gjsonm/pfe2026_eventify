import { A } from "@solidjs/router";

export default () => {
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

          {/* Link Login dan Register*/}
          <div class="flex items-center space-x-4">
            <A
              href="/login"
              class="text-gray-600 hover:text-indigo-600 font-medium text-sm px-3 py-2 rounded-lg transition-colors"
            >
              Masuk
            </A>
            <A
              href="/register"
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-100"
            >
              Register
            </A>
          </div>
        </div>
      </div>
    </nav>
  );
};
