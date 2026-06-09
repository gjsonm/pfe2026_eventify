import { Match, Switch } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useAuthContext } from "./context/AuthContext";
import { useEventContext } from "./context/EventContext";
import CancelButton from "./CancelButton";

export default function EventHeader(props) {
  const auth = useAuthContext();
  const navigate = useNavigate();
  const { setEvents, setPeserta } = useEventContext();

  const HapusEvent = async (e) => {
    if (!auth.user() || !props.event?.id) return;
    try {
      const response = await fetch("http://localhost:3001/api/cancel-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: props.event?.id,
          user_id: auth.user().id,
        }),
      });

      if (response.ok) {
        setEvents((prev) => prev.filter((e) => e.id !== parseInt(props.event?.id)));
        setPeserta((prev) => prev.filter((p) => p.event_id !== parseInt(props.event?.id)));
        alert("Event successfully deleted.");
        navigate(-1);
      } else {
        alert("Failed to delete event.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-between items-center mb-6 border-b pb-4 mt-4">
      <h1 className="font-bold text-black text-3xl">{props.event?.name}</h1>

      <Switch>
        <Match when={auth.user() && props.role === "creator"}>
          <button
            type="button"
            onClick={HapusEvent}
            class="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded hover:bg-red-50 transition-colors"
          >
            Delete Event
          </button>
        </Match>

        <Match when={auth.user() && props.isRegistered()}>
          <CancelButton eventId={props.event?.id} />
        </Match>
      </Switch>
    </div>
  );
}
