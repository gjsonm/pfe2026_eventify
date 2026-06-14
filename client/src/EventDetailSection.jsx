import Peserta from "./Peserta";
import Pagination from "./Pagination";
import { useEventContext } from "./context/EventContext"
import { createSignal } from "solid-js";

export default function EventDetailSection(props) {
    const { peserta, pengguna } = useEventContext();
    const participantList = () => {
        if (!props.event) return [];
        return peserta
            .filter(p => p.event_id === props.event.id)
            .map(p => {
                const user = pengguna.find(u => u.id === p.participant_id);
                return user ? user.name : "Unknown User";
            });
    };

    const [currentPage, setCurrentPage] = createSignal(1);
    const pesertaPerPage = 5; 
    const start = () => (currentPage() - 1) * pesertaPerPage;
    const paginatedParticipants = () => {
        return participantList().slice(start(), start() + pesertaPerPage);
    };

    const totalPages = () => Math.ceil(participantList().length / pesertaPerPage);
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">
            <div class="col-span-1 flex flex-col gap-6">
                <div class="lokasi">
                    <h3 class="font-bold text-black text-lg mb-2">Location</h3>
                    <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                        <p class="text-black m-0">{props.event?.location}</p>
                    </div>
                </div>

                <div class="deskripsiAcara flex-grow">
                    <h3 class="font-bold text-black text-lg mb-2">Event Description</h3>
                    <div class="border border-black rounded p-3 h-64 overflow-y-auto">
                        <p class="text-black m-0">{props.event?.description}</p>
                    </div>
                </div>
            </div>

            <div class="col-span-1 md:col-span-2 flex flex-col gap-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="tanggal">
                        <h3 class="font-bold text-black text-lg mb-2">Date</h3>
                        <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                            <p class="text-black m-0">{props.event?.date}</p>
                        </div>
                    </div>

                    <div class="waktu">
                        <h3 class="font-bold text-black text-lg mb-2">Time</h3>
                        <div class="border border-black rounded px-3 py-2 flex items-center gap-2">
                            <p class="text-black m-0">{props.event?.time}</p>
                        </div>
                    </div>
                </div>

                <div class="tabel-peserta w-full mt-2">
                    {/* <Peserta participantList={paginatedParticipants()} /> */}
                    <Peserta 
                        participantList={paginatedParticipants()} 
                        start={start()} 
                    />
                    <Pagination 
                        current={currentPage} 
                        total={totalPages} 
                        onPageChange={(page) => setCurrentPage(page)} 
                    />
                </div>
            </div>
        </div>
    );
}