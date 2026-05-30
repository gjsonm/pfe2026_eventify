import { A } from "@solidjs/router";

const NotFound = () => {
    return (
        <div class="w-full h-[calc(100vh-100px)] px-4 flex flex-col items-center justify-center font-sans bg-white">
            <div class="w-full max-w-md flex flex-col items-center text-center gap-5">
                <h1 class="text-7xl font-extrabold text-indigo-600 tracking-tight">
                    404
                </h1>

                <div class="flex flex-col gap-1">
                    <h2 class="text-2xl font-bold text-gray-800">
                        Page Not Found! 
                    </h2>

                    <p class="text-base text-gray-500 max-w-sm">
                        Halaman yang kamu cari tidak ada
                    </p>
                </div>

                <A
                    href="/" 
                    class="mt-2 w-52 bg-indigo-600 text-white border border-indigo-600 rounded-xl py-2.5 font-medium text-center cursor-pointer transition-all duration-200 hover:bg-indigo-700 hover:border-indigo-700 shadow-sm"
                >
                    Kembali ke Dashboard
                </A>
            </div>
        </div>

    )
}

export default NotFound;