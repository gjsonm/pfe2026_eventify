import Card from "../src/EventCard.jsx";
import Pagination from "../src/Pagination.jsx";
import { useEventContext } from "../src/context/EventContext";
import { useSearchParams } from "@solidjs/router";

const Dashboard = () => {
  const { events } = useEventContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const filteredEvents = () => {
    const query = (searchParams.search || "").toLowerCase();

    if(!query) {
      return events;
    }

    return events.filter((event) => {
      if (!event.name) return false;

      const eventName = event.name.toLowerCase();
      return eventName.includes(query);
    });
  }

  return (
    <div class="min-h-screen flex flex-col bg-gray-100 px-4 py-6 sm:px-6 lg:px-8 gap-4">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <header class="relative">
          <div class="mx-auto max-w-7xl ">
            <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
              Upcoming Event
            </h1>
            <small>Browse and register for upcoming event</small>
          </div>
        </header>
        <div class="relative w-full max-w-md">
          <img
            src="/src/img/search.svg"
            alt="search"
            class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          />

          <input
            type="text"
            placeholder="Event Name"
            value={searchParams.search || ""}
            oninput={(e) => {
              setSearchParams({ search: e.target.value });
            }}
            class="w-full rounded-md border border-gray-300 focus:border-indigo-500 py-2 pl-10 pr-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start mx-auto">
          <For each={filteredEvents()} fallback={<p class="col-span-full text-gray-500 italic py-4">Currently no events available</p>}>
            {(event) => (
              <Card
                nama={event.name}
                gambar={event.image}
                waktu={`${event.date} - ${event.time}`}
                tempat={event.location}
                eventId={event.id}
                creator={event.creator}
              />
            )}
          </For>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Dashboard;
