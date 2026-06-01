import { useNavigate, useParams } from "@solidjs/router";
import { useAuthContext } from "../src/context/AuthContext";
import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";
import { Match, Switch } from "solid-js";
import event from "../../server/data/event.json";
import peserta from "../../server/data/peserta.json";

const EventDetail = () => {
  const auth = useAuthContext();
  const params = useParams();
  const navigate = useNavigate();

  const currEvent = event.find(e => e.id === parseInt(params.id, 10));

  let userRole = "";
  let isRegistered = false;

  if (auth.user() && auth.user().id === currEvent.creator) {
    userRole = "creator";
  } else if (auth.user()) {
    const checkRegister = peserta.some(p => p.userId === auth.user().id && p.eventId === currEvent.id);
    if (checkRegister) {
      isRegistered = true;
    }
  }

  return (
    <Switch fallback={navigate("/login")}>
      <Match when={auth.user()}>
        <div class="px-8 md:px-16 py-8 w-full">
          <BackButton />
          <EventHeader
            eventId={params.id}
            role={userRole}
            isRegistered={isRegistered}
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
