import { For } from "solid-js";

export default function Pagination(props) {
    
    const pageNumbers = () => {
        const pages = [];
        for(let i = 1; i <= props.total(); i++){
            pages.push(i);
        }
        return pages;
    };

    return (
        <div className="pagination">
            <div class="mt-6 flex items-center justify-end gap-2">
                <button 
                    onClick={() => props.onPageChange(props.current() - 1)}
                    disabled={props.current() === 1}
                    class="pagination-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {"<-"} Prev
                </button>

                <For each={pageNumbers()}>
                    {(page) => (
                        <button
                            onClick={() => props.onPageChange(page)}
                            class={`pagination-btn ${props.current() === page ? 'active' : ''}`}
                        >
                            {page}
                        </button>
                    )}
                </For>

                <button 
                    onClick={() => props.onPageChange(props.current() + 1)}
                    disabled={props.current() === props.total() || props.total() === 0}
                    class="pagination-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next {"->"}
                </button>
            </div>
        </div>
    );
}