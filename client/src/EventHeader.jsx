import { useAuthContext } from "./context/AuthContext";
import { Match, Switch } from "solid-js";
import { HapusEvent } from "./js/HapusEvent";
import CancelButton from "./CancelButton";

export default function EventHeader(props) {
  const auth = useAuthContext();

  return (
    <div className="flex justify-between items-center mb-6 border-b pb-4 mt-4">
      <h1 className="font-bold text-black text-3xl">{props.event?.name}</h1>

      <Switch>
        <Match when={auth.user() && props.role === "creator"}>
          <button
            type="button"
            onClick={() => HapusEvent(props.event?.id)}
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