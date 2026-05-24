import { BatalPendaftaran } from "./js/BatalPendaftaran";

export default function EventHeader() {
  return (
    <div class="flex justify-between items-center mb-6 border-b pb-4 mt-4">
        <h1 class="font-bold text-black text-3xl">Parcestra</h1>
        <button class="px-4 py-2 border border-whitw-500 text-black-500 font-semibold rounded" 
        type="button" 
        onClick={() => BatalPendaftaran(props.eventId)}> Batal Pendaftaran </button>
    </div>
  );
}