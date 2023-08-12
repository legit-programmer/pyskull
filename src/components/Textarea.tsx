import axios from "axios";

interface props {
    code: string;
    setCode: any;
}

const Textarea = ({ code, setCode }: props) => {
    const sendCode = () => {
        axios.post(
            "http://127.0.0.1:5000/hammer",
            { code: code, token: "sdhflkjs" },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
    };
    return (
        <>
            <div className="">
                <textarea
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-[75vh] bg-[#171A2F] text-white text-2xl"
                    cols={30}
                    rows={10}
                ></textarea>
            </div>
            <button onClick={sendCode}>Run</button>
        </>
    );
};

export default Textarea;
