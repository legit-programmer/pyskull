import { useState } from "react";
import Textarea from "./components/Textarea";
import Output from "./components/Output";
import axios
from "axios";
function App() {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState(Array<string>);
    const [error, setError] = useState(false);

    const sendCode = () => {
        axios.post(
            "http://127.0.0.1:5000/hammer",
            { code: code, token: "sdhflkjs" },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        ).then(
            res=>{setOutput(res.data['output'].split('\n'));setError(res.data['error'])}
        )
    };
    return (
        <>
            <div className="main">
                <Textarea code={code} setCode={setCode} />
                <Output output={output} setOutput={setOutput} error={error} sendCode={sendCode}/>
                
            </div>
        </>
    );
}

export default App;
