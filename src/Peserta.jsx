export default function Peserta() {
    // Data Dummy
    const daftarPeserta = [
        { no: 1, nama: "Adit" },
        { no: 2, nama: "Sopo" },
        { no: 3, nama: "Jarwo" },
        { no: 4, nama: "Ipin" },
        { no: 5, nama: "Upin" },
    ];

    return (
        <div class="w-full mt-8 md:mt-0">
            <h3 class="font-bold text-black text-2xl mb-2">Peserta</h3>
            
            <table class="w-full table-auto">
                <thead>
                <tr>
                    <th class="pb-2 font-bold text-black text-center w-1/4">No</th>
                    <th class="pb-2 font-bold text-black text-center w-3/4">Nama Peserta</th>
                </tr>
                </thead>
                <tbody>
                    <For each={daftarPeserta}>
                        {(peserta) => (
                        <tr>
                            <td class="py-2 font-bold text-black text-center">{peserta.no}</td>
                            <td class="py-2 font-bold text-black text-center">{peserta.nama}</td>
                        </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    )
}