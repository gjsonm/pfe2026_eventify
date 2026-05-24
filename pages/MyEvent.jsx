import { A } from "@solidjs/router";
import CardMyEvent from "./component/EventCardMyEvent.jsx";

const dummy = [
  {
    nama: "Perayaan Natal",
    gambar: "pengisi.jpg",
    waktu: "10 Mei 2026 - 19:00",
    tempat: "Universitas Katolik Parahyangan",
  },
  {
    nama: "Tech Conference",
    gambar: "BB.jpg",
    waktu: "15 Mei 2026 - 09:00",
    tempat: "Bandung Convention Center",
  },
  {
    nama: "Music Festival",
    gambar: "pengisi.jpg",
    waktu: "20 Mei 2026 - 18:30",
    tempat: "Sasana Budaya Ganesha",
  },
  {
    nama: "Startup Expo",
    gambar: "BB.jpg",
    waktu: "25 Mei 2026 - 13:00",
    tempat: "BINUS Bandung",
  },
  {
    nama: "Workshop UI/UX",
    gambar: "pengisi.jpg",
    waktu: "28 Mei 2026 - 10:00",
    tempat: "Telkom University",
  },
  {
    nama: "Seminar AI",
    gambar: "BB.jpg",
    waktu: "30 Mei 2026 - 15:00",
    tempat: "ITB Aula Barat",
  },
];

const MyEvent = () => {
  return (
    <div class="min-h-screen flex flex-col bg-gray-100 px-4 py-6 sm:px-6 lg:px-8 gap-4">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <header class="relative">
          <div class="mx-auto max-w-7xl ">
            <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
              My Event
            </h1>
            <small>Acara yang saya buat</small>
          </div>
        </header>
        <div class="relative max-w-md">
          <A
            href="/myevent/new"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-100 flex justify-end"
          >
            Buat Acara
          </A>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start">
        {dummy.slice(0,4).map((event) => (
          <CardMyEvent
            nama={event.nama}
            gambar={event.gambar}
            waktu={event.waktu}
            tempat={event.tempat}
          />
        ))}
      </div>
      <div class="mt-6 flex items-center justify-end gap-2">
        {/* Prev */}
        <a
          class="pagination-btn"
        >
          {"<-"} Prev
        </a>

        {/* Active Page */}
        <a
          class="pagination-btn active"
        >
          1
        </a>

        {/* Normal Page */}
        <a
          class="pagination-btn"
        >
          2
        </a>

        <a
          class="pagination-btn"
        >
          3
        </a>

        {/* Next */}
        <a
          class="pagination-btn"
        >
          Next {"->"}
        </a>
      </div>

      {/* garis pembatas */}
      <hr class="border-t-4 border-indigo-600"></hr>

      <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <header class="relative">
          <div class="mx-auto max-w-7xl ">
            <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
              Acara yang saya ikuti
            </h1>
          </div>
        </header>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start">
        {dummy.slice(0,4).map((event) => (
          <CardMyEvent
            nama={event.nama}
            gambar={event.gambar}
            waktu={event.waktu}
            tempat={event.tempat}
          />
        ))}
      </div>
      <div class="mt-6 flex items-center justify-end gap-2">
        {/* Prev */}
        <a
          class="pagination-btn"
        >
          {"<-"} Prev
        </a>

        {/* Active Page */}
        <a
          class="pagination-btn active"
        >
          1
        </a>

        {/* Normal Page */}
        <a
          class="pagination-btn"
        >
          2
        </a>

        <a
          class="pagination-btn"
        >
          3
        </a>

        {/* Next */}
        <a
          class="pagination-btn"
        >
          Next {"->"}
        </a>
      </div>
    </div>
  );
};

export default MyEvent;