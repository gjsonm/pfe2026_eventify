import { createContext, createSignal, onMount, useContext } from "solid-js";

// ref https://youtu.be/ndB7PwS1yqk?si=s4LwNNl5FcjfaCsG
const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [user, setUser] = createSignal(null);

    onMount(async () => {
        const response = await fetch("http://localhost:3001/api/checksession", {
            credentials: "include",
        });

        if (response.ok) {
            const data = await response.json();

            if (data.loggedIn) {
                setUser(data.user);
                return;
            }
        } else {
            setUser(null);
        }
    });

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