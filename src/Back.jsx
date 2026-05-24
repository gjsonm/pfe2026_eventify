// (Komponen routing bawaan library, pindah halaman tanpa reload)
import { A } from "@solidjs/router";

export default function BackButton() {
  return (
    <A href="/myevent" class="inline-block px-4 py-2 border rounded border-black-400 text-black-700">
        Kembali ke Event
    </A>
  );
}