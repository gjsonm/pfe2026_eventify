import { A } from "@solidjs/router";

function CardMyEvent(props) {
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

          <p>12 Mei 2026 - 19:00</p>
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

          <p>Bandung Convention Center</p>
        </div>
      </div>
      {/* Button */}
      <button
        class="
            mt-1
            w-full
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
      >
        <A href="/myevent/1">
            Lihat Detail
        </A>
      </button>
    </div>
  );
}

export default CardMyEvent;
