import Peserta from "./Peserta";
import Pagination from "./Pagination";

export default function EventDetailSection() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">
        <div class="col-span-1 flex flex-col gap-6">
            <div class="lokasi">
                <h3 class="font-bold text-black text-lg mb-2">Lokasi</h3>
                <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                    <p class="text-black m-0">PPAG Lantai 3</p>
                </div>
            </div>

            <div class="deskripsiAcara flex-grow">
                <h3 class="font-bold text-black text-lg mb-2">Deskripsi Acara</h3>
                <div class="border border-black rounded p-3 h-64 overflow-y-auto">
                    <p class="text-black m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est natus numquam tempora, nihil doloremque voluptate velit dolorem, consequuntur deleniti temporibus nisi odit labore et necessitatibus? Consequuntur amet est porro autem?
                    </p>
                </div>
            </div>
        </div>

        <div class="col-span-1 md:col-span-2 flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="tanggal">
                    <h3 class="font-bold text-black text-lg mb-2">Tanggal</h3>
                    <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                        <p class="text-black m-0">10 Januari 2026</p>
                    </div>
                </div>

                <div class="waktu">
                    <h3 class="font-bold text-black text-lg mb-2">Waktu</h3>
                    <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                        <p class="text-black m-0">08:00 - 11:00 WIB</p>
                    </div>
                </div>
            </div>

            <div class="tabel-peserta w-full mt-2">
                <Peserta/>
                <Pagination/>
            </div>
      </div>
    </div>
  );
}