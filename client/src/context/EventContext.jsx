import { createContext, useContext, onMount } from "solid-js";
import { createStore } from "solid-js/store";

const EventContext = createContext();

export function EventProvider(props) {
    const [events, setEvents] = createStore([]);
    const [peserta, setPeserta] = createStore([]);
    const [pengguna, setPengguna] = createStore([]);

    onMount(async () => {
        try {
            const res = await fetch("http://localhost:3001/api/events");
            const data = await res.json();

            setEvents(data.events);
            setPeserta(data.peserta);
            setPengguna(data.pengguna);
        } catch (error) {
            console.error("Ada error saat ngambil data event:", error);
        }
    });

    return (
        <EventContext.Provider value={{
            events, setEvents,
            peserta, setPeserta,
            pengguna, setPengguna
        }}>
            {props.children}
        </EventContext.Provider>
    );
}

export function useEventContext() {
    return useContext(EventContext);
}