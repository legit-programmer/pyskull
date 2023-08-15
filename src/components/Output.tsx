interface props {
    output: Array<string>;
    setOutput: any;
    sendCode: () => void;
    error: boolean;
}
const Output = ({ output, sendCode, error }: props) => {
    return (
        <div className="bg-[#131524] text-white h-[24.3vh]">
            <div className="output p-2 font-code">
                {output.map((val) => {
                    return (
                        <p
                            className={error ? " text-red-600" : "text-white"}
                            key={val}
                        >
                            {val}
                        </p>
                    );
                })}
            </div>
            <button
                className=" transition-all bg-red-400  text-white rounded-full hover:translate-x-3 hover:translate-y-3 p-3 hover:p-5 absolute bottom-12 right-12"
                onClick={sendCode}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Output;
