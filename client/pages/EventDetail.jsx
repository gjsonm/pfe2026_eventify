import { useNavigate, useParams } from "@solidjs/router";
import { useAuthContext } from "../src/context/AuthContext";
import { useEventContext } from "../src/context/EventContext";
import { Match, Switch } from "solid-js";

import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";

const EventDetail = () => {
  const auth = useAuthContext();
  const { events, peserta } = useEventContext();
  const params = useParams();
  const navigate = useNavigate();

  const currEvent = () => events.find(e => e.id.toString() === params.id)

  const userRole = () => {
    if (auth.user() && auth.user().id === currEvent()?.creator) {
      return "creator";
    } else if (auth.user()) {
      return "participant"
    }
  }

  const isRegistered = () => {
    if (auth.user() && currEvent() && userRole() !== "creator") {
      return peserta.some(
        p => p.participant_id === auth.user().id && p.event_id === currEvent().id
      );
    }
    return false;
  };

  return (
    <Switch fallback={navigate("/login")}>
      <Match when={auth.user()}>
        <div class="px-8 md:px-16 py-8 w-full">
          <BackButton />
          <EventHeader
            event={currEvent()}
            role={userRole()}
            isRegistered={isRegistered}
          />
          <div class="grid-layout">
            <EventDetailSection event={currEvent()} />
          </div>
        </div>
      </Match>
    </Switch>
  );
};

export default EventDetail;
