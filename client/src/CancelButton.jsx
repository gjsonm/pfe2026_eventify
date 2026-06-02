import { useNavigate } from "@solidjs/router";
import { useAuthContext } from "./context/AuthContext";
import { useEventContext } from "./context/EventContext";

export default function CancelButton(props) {
  const auth = useAuthContext();
  const navigate = useNavigate();
  const { peserta, setPeserta } = useEventContext();

  const handleCancel = async (e) => {
    if (!auth.user() || !props.eventId) return;
    try {
      const response = await fetch('http://localhost:3001/api/cancel-regis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          participant_id: auth.user().id,
          event_id: props.eventId
        })
      });
      if (response.ok) {
        setPeserta(peserta.filter(p => !(p.event_id === props.eventId && p.participant_id === auth.user().id)));
        alert("Registration successfully canceled.");
        navigate(-1);
      } else {
        alert("Failed to cancel registration.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCancel}
      class={"px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-50 transition-colors"}
    >
      Cancel Registration
    </button>
  );
}
