import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";
import { useNavigate, useParams } from "@solidjs/router";
import { useAuthContext } from "../src/context/AuthContext";
import { Match, Switch } from "solid-js";

const EventDetail = () => {
  const auth = useAuthContext();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Switch fallback={navigate("/login")}>
      <Match when={auth.user()}>
        <div class="px-8 md:px-16 py-8 w-full">
          <BackButton />
          <EventHeader eventId={params.id} />
          <div class="grid-layout">
            <EventDetailSection />
          </div>
        </div>
      </Match>
    </Switch>
  )
};

export default EventDetail;
