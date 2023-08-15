interface props {
    output: Array<string>;
    setOutput: any;
    sendCode: ()=>void;
    error: boolean;
}
const Output = ({ output, sendCode, error }: props) => {
    return (
        <div className="bg-[#131524] text-white h-[23vh]">
            <div className="output h-[18vh]">{output.map((val)=>{
                return <p className={error?" text-red-800":"text-white"} key={val}>{val}</p>
            })}</div>
            <button className="bg-red-400 text-white p-2" onClick={sendCode}>Run</button>
        </div>
    );
};

export default Output;
