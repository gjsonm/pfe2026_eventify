import { useNavigate } from "@solidjs/router";
import { useAuthContext } from "./context/AuthContext";
import { useEventContext } from "./context/EventContext";

export default function RegisterButton(props) {
  const auth = useAuthContext();
  const navigate = useNavigate();
  const { peserta, setPeserta } = useEventContext();

  const handleRegister = async (e) => {
    // Wajib login 
    if (!auth.user()) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/register-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participant_id: auth.user().id,
          event_id: props.eventId
        })
      });
      if (response.ok) {
        const dataBaru = await response.json();
        setPeserta([...peserta, dataBaru]);
        alert("Successfully registered for this event!");
      } else {
        alert("Failed to register for the event.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleRegister}
      class={props.class || "px-4 py-2 border border-indigo-500 text-indigo-500 font-semibold rounded hover:bg-indigo-50 transition-colors"}
    >
      Register Event
    </button>
  );
}
