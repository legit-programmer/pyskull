interface props {
    code: string;
    setCode: any;
}

const Textarea = ({ code, setCode }: props) => {
    const checkAndAddTab = () => {
        
        if(code[code.length-2]===':'){
            const temp = code + '\t';
            console.log(temp);
            setCode(temp);
        }
    };
    return (
        <>
            <div>
                <textarea
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                    className="font-code p-2 w-[80vw] h-[75vh] bg-[#171A2F] text-white text-xl"
                    cols={30}
                    rows={10}
                    onKeyUp={(key) => {
                        if (key.key === "Enter") {
                            checkAndAddTab();
                        }
                    }}
    
                />
            </div>
        </>
    );
};

export default Textarea;
