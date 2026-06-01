import { createContext, createSignal, useContext } from "solid-js";

// ref https://youtu.be/ndB7PwS1yqk?si=s4LwNNl5FcjfaCsG
const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [user, setUser] = createSignal(null);
    const sessionUser = sessionStorage.getItem("user")

    if (sessionUser) {
        setUser(JSON.parse(sessionUser));
    } else {
        setUser(null);
    }

    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}