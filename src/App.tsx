import { useState } from "react";
import Textarea from "./components/Textarea";

function App() {
    const [code, setCode] = useState("");
    return <>
    <div className="main">
    <Textarea code={code} setCode={setCode}/>
    </div>
    </>;
}

export default App;
