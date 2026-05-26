// (Komponen routing bawaan library, pindah halaman tanpa reload)
import { A } from "@solidjs/router";

export default function BackButton() {
  return (
    <A href="/myevent" class="inline-block px-4 py-2 border border-black-300 text-black-700 font-semibold rounded hover:border-indigo-500 hover:text-indigo-500 transition-colors">
      {"< "}Kembali ke Event
    </A>
  );
}