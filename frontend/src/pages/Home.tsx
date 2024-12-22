import { useSesion } from "../hook/useSesion.ts";
function Home() {
    const { name, email } = useSesion();
    return (
        <div>
            <h1>Home</h1>
            <span>{name}</span>
            <span>{email}</span>
        </div>
    );
}

export default Home;