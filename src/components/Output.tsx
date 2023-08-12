interface props {
    output: string;
    setOutput: any;
    sendCode: ()=>void;
}
const Output = ({ output, sendCode }: props) => {
    return (
        <div className="bg-[#131524] text-white h-[23vh]">
            <div className="output">{output}</div>
            <button className="bg-red-400 text-white p-2" onClick={sendCode}>Run</button>
        </div>
    );
};

export default Output;
