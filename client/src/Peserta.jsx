export default function Peserta(props) {
    return (
        <div class="w-full mt-8 md:mt-0">
            <h3 class="font-bold text-black text-2xl mb-2">Participants</h3>

            <table class="w-full table-auto">
                <thead>
                    <tr>
                        <th class="pb-2 font-bold text-black text-center w-1/4">No</th>
                        <th class="pb-2 font-bold text-black text-center w-3/4">Participant Name</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={props.participantList}>
                        {(namaPeserta, index) => (
                            <tr>
                                <td class="py-2 font-bold text-black text-center">{index() + 1}</td>
                                <td class="py-2 font-bold text-black text-center">{namaPeserta}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    )
}