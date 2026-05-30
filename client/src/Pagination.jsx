import { A } from "@solidjs/router";
export default function Pagination() {
    return (
        <div className="pagination">
            <div class="mt-6 flex items-center justify-end gap-2">
                {/* Sementara pake activeClass="" biar bisa di warnanya itu g detect .active di css soalny blm ad perbedaan alamat */}
                {/* Todo : Hapus activeclass nanti */}
                {/* Prev */}
                <A href="#" activeClass="" class="pagination-btn">
                    {"<-"} Prev
                </A>

                {/* Active Page */}
                <A href="#" activeClass="" class="pagination-btn active">1</A>

                {/* Normal Page */}
                <A href="#" activeClass="" class="pagination-btn">2</A>

                <A href="#" activeClass="" class="pagination-btn">3</A>

                {/* Next */}
                <A href="#" activeClass="" class="pagination-btn">Next {"->"}</A>
            </div>
        </div>
    );
}