import { A } from "@solidjs/router";

export default () => {
  return (
    <>
      <h1>Ini MyEvent</h1>
      <A
        href="/myevent/new"
        class="inline-block mx-auto px-4 py-2 border rounded"
      >
        New Event
      </A>
      <A
        href="/myevent/1"
        class="inline-block mx-auto px-4 py-2 border rounded"
      >
        Event Detail
      </A>
    </>
  );
};
