interface props {
    output: Array<string>;
    setOutput: any;
    sendCode: ()=>void;
}
const Output = ({ output, sendCode }: props) => {
    return (
        <div className="bg-[#131524] text-white h-[23vh]">
            <div className="output h-[18vh]">{output.map((val)=>{
                return <p>{val}</p>
            })}</div>
            <button className="bg-red-400 text-white p-2" onClick={sendCode}>Run</button>
        </div>
    );
};

export default Output;
