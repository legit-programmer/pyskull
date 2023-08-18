import { useState } from "react";

interface props {
    code: string;
    setCode: any;
}

const Textarea = ({ code, setCode }: props) => {
    const [curPos, setCurPos] = useState(0);
    const checkAndAddTab = () => {
        if (code[code.length - 2] === ":") {
            const temp = code + "\t";
            console.log(temp);
            setCode(temp);
        }
    };
    return (
        <>
            <div>
                <textarea
                    onChange={(e) => setCode(e.target.value)}
                    id="lowcode"
                    value={code}
                    className="font-code p-2 w-[80vw] h-[75vh] bg-[#171A2F] text-white text-xl"
                    cols={30}
                    rows={10}
                    onKeyUp={(key) => {
                        if (key.key === "Enter") {
                            checkAndAddTab();
                        }
                        
                    }}
                    onKeyDownCapture={(event) => {
                        if (event.key === "Tab") {
                            const index = event.currentTarget.selectionStart;
                            let temp = code;
                            temp = temp.slice(0, index) + '\t' + temp.slice(index, temp.length)
                            setCode(temp);
                            setCurPos(index+1)
                            event.preventDefault()
                            
                            
                        }
                    }}
                    onKeyUpCapture={
                        (key)=>{
                            if(key.key==="Tab"){
                                key.currentTarget.setSelectionRange(curPos, curPos)
                                console.log('fdsff')
                            }
                        }
                    }
                />
            </div>
        </>
    );
};

export default Textarea;
