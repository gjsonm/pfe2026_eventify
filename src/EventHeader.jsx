import { BatalPendaftaran } from "./js/BatalPendaftaran";

export default function EventHeader() {
  return (
    <div className="flex justify-between items-center mb-6 border-b pb-4 mt-4">
      <h1 className="font-bold text-black text-3xl">Parcestra</h1>
      <button className="px-4 py-2 border border-black-300 text-black-700 font-semibold rounded hover:border-indigo-500 hover:text-indigo-500 transition-colors"
        type="button"
        onClick={() => BatalPendaftaran(props.eventId)}> Cancel Registration </button>
    </div>
  );
}