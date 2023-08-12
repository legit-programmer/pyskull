import { useState } from "react";
import Textarea from "./components/Textarea";
import Output from "./components/Output";
import axios
from "axios";
function App() {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");

    const sendCode = () => {
        axios.post(
            "http://127.0.0.1:5000/hammer",
            { code: code, token: "sdhflkjs" },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        )
    };
    return (
        <>
            <div className="main">
                <Textarea code={code} setCode={setCode} />
                <Output output={output} setOutput={setOutput} />
                <button onClick={sendCode}>Run</button>
            </div>
        </>
    );
}

export default App;
