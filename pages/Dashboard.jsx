// pages/Dashboard.jsx
import Card from "./component/EventCard.jsx";
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
const Dashboard = () => {
  return (
    <div class="min-h-screen flex flex-col bg-gray-100 px-4 py-6 sm:px-6 lg:px-8 gap-4">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <header class="relative">
          <div class="mx-auto max-w-7xl ">
            <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
              Upcoming Event
            </h1>
            <small>Browse and register for upcoming event</small>
          </div>
        </header>
        <div class="relative w-full max-w-md">
          <img
            src="/src/img/search.svg"
            alt="search"
            class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="Nama Event"
            class="w-full rounded-md border border-gray-300 focus:border-indigo-500 py-2 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start">
        {dummy.map((event) => (
          <Card
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
          class="pagination-btn
    "
        >
          {"<-"} Prev
        </a>

        {/* Active Page */}
        <a
          class="
      pagination-btn active
    "
        >
          1
        </a>

        {/* Normal Page */}
        <a
          class="
      pagination-btn
    "
        >
          2
        </a>

        <a
          class="
      pagination-btn
    "
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

export default Dashboard;
