export default function Pagination() {
    return (
        <div className="pagination">
            <div class="mt-6 flex items-center justify-end gap-2">
        {/* Prev */}
        <a class="pagination-btn">
            {"<-"} Prev
        </a>

        {/* Active Page */}
        <a class="pagination-btn active">1</a>

        {/* Normal Page */}
        <a class="pagination-btn">2</a>

        <a class="pagination-btn">3</a>

        {/* Next */}
        <a class="pagination-btn">Next {"->"}</a>
      </div>
    </div>
    );
}