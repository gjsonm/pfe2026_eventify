import { A } from "@solidjs/router";
export default function Pagination() {
    return (
        <div className="pagination">
            <div class="mt-6 flex items-center justify-end gap-2">
                {/* Prev */}
                <A class="pagination-btn">
                    {"<-"} Prev
                </A>

                {/* Active Page */}
                <A class="pagination-btn active">1</A>

                {/* Normal Page */}
                <A class="pagination-btn">2</A>

                <A class="pagination-btn">3</A>

                {/* Next */}
                <A class="pagination-btn">Next {"->"}</A>
            </div>
        </div>
    );
}