import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";
import Peserta from "../src/Peserta";
import { useParams } from "@solidjs/router";

const EventDetail = () => {
  const params = useParams();

  return <div class="px-8 md:px-16 py-8 w-full">
    <BackButton/>
    <EventHeader eventId={params.id} />
    <div class="grid-layout">
      <EventDetailSection/>
    </div>
  </div>;
};

export default EventDetail;
