import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const EventForm = () => {
    const handleSubmit = (e) => {
        if (e) e.preventDefault(); 
        alert(`Acara Berhasil Dibuat!`);
        navigate("/");
    };

    const [eventName, setEventName] = createSignal("")
    const [eventDate, setEventDate] = createSignal("")
    const [eventTime, setEventTime] = createSignal("")
    const [eventLocation, setEventLocation] = createSignal("")
    const [eventDesc, setEventDesc] = createSignal("")

    return(
        <div class="min-h-screen bg-white px-4 py-8 flex flex-col items-center font-sans relative">
            <div class="w-full flex justify-start mb-1">
                <A
                    href="/"
                    class="ml-45 border border-gray-400 text-xs px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 hover:bg-indigo-600 hover:text-white"
                    >
                ← Kembali ke Dashboard
                </A>
            </div>
            
            <h1 class="text-2xl font-bold text-center -mt-10 mb-6">Buat Acara Baru</h1>

            <form onSubmit={handleSubmit} class="w-full max-w-2xl flex flex-col gap-6">
                {/* Bagian tambah gambar */}
                <div class="border-2 border-gray-400 rounded-md p-12 flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <span class="text-gray-600 font-medium text-lg">+ Tambah Gambar</span>
                </div>

                <div class="border border-gray-400 rounded-md p-6 flex flex-col gap-4 bg-white">
                    {/* baris pertama input - Nama Acara */}
                    <div class="flex flex-col gap-1.5">   
                        <label class="text-lg font-semibold text-gray-800">Nama Acara:</label>
                        <input
                            type="text"
                            value={eventName()}
                            onInput={(e) => setEventName(e.target.value)}
                            required
                            class="w-full border border-gray-400 rounded p-2 text-base focus:outline-indigo-500"
                        />
                    </div>

                    {/* baris kedua input - Tanggal dan Waktu */}
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex flex-col gap-1.5">   
                            <label class="text-lg font-semibold text-gray-800">Tanggal:</label>
                            <input
                                type="date"
                                value={eventDate()}
                                onInput={(e) => setEventDate(e.target.value)}
                                required
                                class="w-full border border-gray-400 rounded p-2 text-base focus:outline-indigo-500"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">   
                            <label class="text-lg font-semibold text-gray-800">Waktu:</label>
                            <input
                                type="time"
                                value={eventDate()}
                                onInput={(e) => setEventTime(e.target.value)}
                                required
                                class="w-full border border-gray-400 rounded p-2 text-base focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    {/* baris ketiga input - Lokasi */}
                    <div class="flex flex-col gap-1.5">   
                        <label class="text-lg font-semibold text-gray-800">Lokasi:</label>
                        <div class="relative w-full"> 
                            <input 
                                type="text"
                                value={eventLocation()}
                                onInput={(e) => setEventLocation(e.target.value)}
                                required
                                class="w-full border border-gray-400 rounded p-2 text-base focus:outline-indigo-500"
                            />

                            <img
                                src="/src/img/geo-alt.svg"
                                alt="location-icon"
                                class="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none" 
                            />
                        </div>
                    </div>

                    {/* baris keempat input - Deskripsi */}
                    <div class="flex flex-col gap-1.5">   
                        <label class="text-lg font-semibold text-gray-800">Deskripsi:</label>
                        <textarea
                            value={eventDesc()}
                            onInput={(e) => setEventDesc(e.target.value)} 
                            required
                            class="w-full border border-gray-400 rounded p-2 text-base focus:outline-indigo-500 resize-none"
                        />
                    </div>
                </div>
            </form>

            <div class="flex justify-end gap-4 mt-2 w-full max-w-2xl">
                {/* button batal */}
                <A
                    href="/myEvent"
                    class="w-36 border border-gray-400 rounded-md py-2 flex justify-center items-center text-center cursor-pointer transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                >
                Batal
                </A>

                {/* button submit acara yang dibuat */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    class="w-36 bg-indigo-600 text-white border border-indigo-600 rounded-md py-2 cursor-pointer transition-all duration-200 hover:bg-indigo-700 shadow-md shadow-indigo-100"
                >
                Buat Acara
                </button>
            </div>
        </div>
    );
};

export default EventForm;