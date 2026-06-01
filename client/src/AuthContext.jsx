//SOURCE GEMINI (SEMENTARA)

// src/context/AuthContext.jsx
import { createContext, useContext, createSignal } from "solid-js";

const AuthContext = createContext();

export function AuthProvider(props) {
    // Mengecek apakah sebelumnya user sudah login dan tersimpan di browser (Client-Side Storage)
    const storedUser = localStorage.getItem("user");
    
    // Inisialisasi state dengan data dari localStorage jika ada, jika tidak maka null
    const [user, setUser] = createSignal(storedUser ? JSON.parse(storedUser) : null);

    const login = (userData) => {
        setUser(userData);
        // Simpan ke local storage agar sesi tidak hilang saat direfresh
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

// Custom hook agar komponen lain gampang manggil context ini
export const useAuth = () => useContext(AuthContext);