import { BatalPendaftaran } from "./js/BatalPendaftaran";
import { useNavigate } from "@solidjs/router";
import {useAuth} from "./AuthContext";

export default function EventHeader() {
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleRequireLogin = () => {
    alert("Harap login terlebih dahulu!");
    navigate("/login")
  }

  return (
    <div className="flex justify-between items-center mb-6 border-b pb-4 mt-4">
      <h1 className="font-bold text-black text-3xl">Parcestra</h1>
      
      <Switch 
        fallback={
          <button 
            type="button"
            onClick={handleRequireLogin}
            class="px-4 py-2 border border-indigo-500 text-indigo-500 font-semibold rounded hover:bg-indigo-50 transition-colors"
          > 
            Register Event 
          </button>
        }
      >
        
        <Match when={user() && props.role === "creator"}>
          <button 
            type="button"
            onclick={() => HapusEvent(props.eventId)}
            class="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded hover:bg-red-50 transition-colors"
          > 
            Hapus Event
          </button>
        </Match>

        <Match when={user() && props.isRegistered}>
          <button 
            type="button"
            onClick={() => BatalPendaftaran(props.eventId)}
            class="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-50 transition-colors"
          > 
            Cancel Event 
          </button>
        </Match>

        <Match when={user() && !props.isRegistered}>
          <button 
            type="button"
            onClick={()=> DaftarEvent(props.eventId)}
            class="px-4 py-2 border border-indigo-500 text-indigo-500 font-semibold rounded hover:bg-indigo-50 transition-colors"
          > 
            Register Event 
          </button>
        </Match>

      </Switch>
    </div>
  );
}