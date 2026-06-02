import { A } from "@solidjs/router";
import { Match, Switch } from "solid-js";
import { useAuthContext } from "./context/AuthContext";
import { useEventContext } from "./context/EventContext";
import RegisterButton from "./RegisterButton";

function Card(props) {
  const auth = useAuthContext();
  const { peserta } = useEventContext();

  const isCreator = () => auth.user() && auth.user().id === props.creator;
  const isRegistered = () => {
    if (!auth.user()) return false;
    return peserta.some(p => p.event_id === props.eventId && p.participant_id === auth.user().id);
  };

  return (
    <div
      class="
        w-full
        sm:w-60
        md:w-64
        lg:w-72
        overflow-hidden
        rounded-lg
        bg-white
        shadow
      "
    >
      {/* Gambar Event */}
      <img
        src={`/src/img/${props.gambar}`}
        alt="Gambar Event"
        class="
          h-28
          sm:h-32
          md:h-36
          lg:h-40
          w-full
          object-cover
        "
      />

      <div class="flex flex-col gap-2 p-3 md:p-4">
        {/* Nama Event */}
        <h2
          class="
            text-sm
            md:text-base
            font-semibold
            text-gray-800
          "
        >
          {props.nama}
        </h2>

        {/* Waktu */}
        <div
          class="
            flex
            items-center
            gap-2
            text-xs
            md:text-sm
            text-gray-600
          "
        >
          <img
            src="/src/img/clock.svg"
            alt="waktu"
            class="
              h-3
              w-3
              md:h-4
              md:w-4
            "
          />

          <p>{props.waktu}</p>
        </div>

        {/* Lokasi */}
        <div
          class="
            flex
            items-center
            gap-2
            text-xs
            md:text-sm
            text-gray-600
          "
        >
          <img
            src="/src/img/geo-alt.svg"
            alt="point"
            class="
              h-3
              w-3
              md:h-4
              md:w-4
            "
          />

          <p>{props.tempat}</p>
        </div>
      </div>
      {/* Button */}
      <div class="mt-1">
        <Switch>
          <Match when={isCreator() || isRegistered()}>
            <A
              class="
                  block
                  w-full
                  text-center
                  rounded
                  bg-indigo-600
                  px-3
                  py-1
                  text-xs
                  md:px-4
                  md:py-2
                  md:text-sm
                  text-white
                  hover:bg-indigo-700
                "
              href={`/myevent/${props.eventId}`}
            >
              View Details
            </A>
          </Match>

          <Match when={!isCreator() && !isRegistered()}>
            <RegisterButton
              eventId={props.eventId}
              class="
                  block
                  w-full
                  text-center
                  rounded
                  bg-indigo-600
                  px-3
                  py-1
                  text-xs
                  md:px-4
                  md:py-2
                  md:text-sm
                  text-white
                  hover:bg-indigo-700
                "
            />
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default Card;
