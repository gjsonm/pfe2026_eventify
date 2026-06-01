import { useParams } from "@solidjs/router";
import { useAuth } from "../src/AuthContext";
import BackButton from "../src/Back";
import EventHeader from "../src/EventHeader";
import EventDetailSection from "../src/EventDetailSection";

import event from "../../server/data/event.json";
import peserta from "../../server/data/peserta.json";

export default function EventDetail (){
  const params = useParams();
  const {user} = useAuth();

  const currEvent = event.find(e => e.id === parseInt(params.id, 10));

  let userRole = "";
  if(user() && user().id === currEvent.creator){
    userRole = "creator";
  } else {
    const checkRegister = peserta.some(p => p.userId === user().id && p.eventId === currEvent.id);
    let isRegistered = false;
    if(checkRegister){
      isRegistered = true;
    }
  }

  return <div class="px-8 md:px-16 py-8 w-full">
    <BackButton/>
    <EventHeader 
      eventId = {params.id}
      role = {userRole}
      isRegistered = {isRegistered}
    />
    <div class="grid-layout">
      <EventDetailSection/>
    </div>
  </div>;
}