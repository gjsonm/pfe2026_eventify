import { useNavigate } from "@solidjs/router";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      class="inline-block px-4 py-2 border border-black-300 text-black-700 font-semibold rounded hover:border-indigo-500 hover:text-indigo-500 transition-colors"
    >
      {"< "}Back
    </button>
  );
}