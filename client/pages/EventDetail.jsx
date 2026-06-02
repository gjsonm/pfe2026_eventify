import { useNavigate, useParams } from "@solidjs/router";
import { useAuthContext } from "../src/context/AuthContext";
import { useEventContext } from "../src/context/EventContext";
import { createEffect, Match, Switch } from "solid-js";

import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";

const EventDetail = () => {
  const auth = useAuthContext();
  const eventStore = useEventContext();
  const params = useParams();
  const navigate = useNavigate();

  createEffect(() => {
    if (!auth.user()) {
      return navigate("/login", { replace: true});
    }
  })

  const currEvent = () => eventStore.events.find(e => e.id === parseInt(params.id, 10))

  const userRole = () => {
    if (auth.user() && auth.user().id === currEvent.creator) {
      return "creator";
    } else if (auth.user()) {
      return "peserta"
    }
  }

  const isRegistered = () => {
    if (auth.user() && currEvent() && userRole() !== "creator") {
      return eventStore.peserta.some(
        p => p.userId === auth.user().id && p.eventId === currEvent().id
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
            eventId={params.id}
            role={userRole()}
            isRegistered={isRegistered()}
          />
          <div class="grid-layout">
            <EventDetailSection />
          </div>
        </div>
      </Match>
    </Switch>
  );
};

export default EventDetail;
