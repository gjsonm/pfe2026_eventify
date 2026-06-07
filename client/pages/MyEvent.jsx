import { A, useNavigate } from "@solidjs/router";
import Card from "../src/EventCard.jsx";
import Pagination from "../src/Pagination.jsx";
import { useAuthContext } from "../src/context/AuthContext.jsx";
import { Match, Switch, For, createSignal } from "solid-js";
import { useEventContext } from "../src/context/EventContext.jsx";

const MyEvent = () => {

  const auth = useAuthContext();
  const navigate = useNavigate();
  const { events, peserta } = useEventContext();

  //Event yang dibuat oleh user yg login
  const createdEvents = () => {
    const currentUser = auth.user();
    if (!currentUser) {
      return [];
    }
    return events.filter((event) => event.creator === currentUser.id);
  };

  //Event yang diikuti oleh user yg login
  const joinedEvents = () => {
    const currentUser = auth.user();
    if (!currentUser) {
      return [];
    }

    //Ambil event yg diikuti oleh user yg login dan ambil id event yg diikuti
    const idEvents = peserta
      .filter((p) => p.participant_id === currentUser.id)
      .map((p) => p.event_id);

    //Kembalikan event yg sesuai dengan idEvents dan id event yg ada di server
    return events.filter((event) => idEvents.includes(event.id));
  };

  const itemsPerPage = 4;
  const [currentCreatedPage, setCurrentCreatedPage] = createSignal(1);
  const paginasiCreatedEvent = () => {
    const start = (currentCreatedPage() - 1) * itemsPerPage;
    return createdEvents().slice(start, start + itemsPerPage);
  }
  const totalCreatedPages = () => Math.ceil(createdEvents().length / itemsPerPage);

  const [currentJoinedPage, setCurrentJoinedPage] = createSignal(1);
  const paginasiJoinedEvent = () => {
    const start = (currentJoinedPage() - 1) * itemsPerPage;
    return joinedEvents().slice(start, start + itemsPerPage);
  }
  const totalJoinedPages = () => Math.ceil(joinedEvents().length / itemsPerPage);


  return (
    <Switch fallback={navigate("/login")}>
      <Match when={auth.user()}>
        <div class="min-h-screen flex flex-col bg-gray-100 px-4 py-6 sm:px-6 lg:px-8 gap-4">
          <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
            <header class="relative">
              <div class="mx-auto max-w-7xl ">
                <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
                  My Event
                </h1>
                <small>Events I Created</small>
              </div>
            </header>
            <div class="relative max-w-md">
              <A
                href="/myevent/new"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-100 flex justify-end"
              >
                Create Event
              </A>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start">
            <For each={paginasiCreatedEvent()} fallback={<p class="col-span-full text-gray-500 italic py-4">You haven't created any events yet.</p>}>
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
          <Pagination 
            current={currentCreatedPage} 
            total={totalCreatedPages} 
            onPageChange={(page) => setCurrentCreatedPage(page)} 
          />

          {/* garis pembatas */}
          <hr class="border-t-4 border-indigo-600"></hr>

          <div class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
            <header class="relative">
              <div class="mx-auto max-w-7xl ">
                <h1 class="text-3xl font-bold tracking-tight text-indigo-600">
                  Events I Joined
                </h1>
              </div>
            </header>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center content-start">
            <For each={paginasiJoinedEvent()} fallback={<p class="col-span-full text-gray-500 italic py-4">You haven't joined any events yet.</p>}>
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
          <Pagination 
            current={currentJoinedPage} 
            total={totalJoinedPages} 
            onPageChange={(page) => setCurrentJoinedPage(page)} 
          />
        </div>
      </Match>
    </Switch>
  );
};

export default MyEvent;