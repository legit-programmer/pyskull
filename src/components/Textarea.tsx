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

    // const highlight = (e: any) => {
    //     // let temp = e.target.value
    //     // temp = temp.replace('print', "<span style={'color':'black'}>print</span>")
    //     // // console.log(temp);
    //     let temp: string = e.innerText;
    //     let temp2 = temp.split(" ")
    //     for (let i in temp2) {
    //         // console.log(temp2);
    //         console.log(temp2[i]);
            
    //         // console.log(!temp2[i].includes("span"));
    //         // console.log(temp2[i].includes("print"))
    //         if (!temp2[i].includes(">print<") && temp2[i].includes("print")) {
    //             console.log('dsljkhfkdjsh');
                
    //             temp = temp.replace("print", '<span id="testy">print</span>');
    //             e.innerHTML = temp;
    //             console.log(e.innerHTML);
    //         }
    //     }
        // if (temp.includes("print")) {
        //     // const lastLocation = temp.

        // }
        // e.currentTarget.innerHTML = 'sdfsf';
        // console.log(e.currentTarget.innerHTML)

        // const codeDiv = e;
        // const range = document.createRange();
        // const sel = window.getSelection();

        // // Set the cursor position after the first word
        // range.setStart(codeDiv.childNodes[0], 5); // The second character of the first text node
        // range.collapse(true);
        // if (sel) {
        //     sel.removeAllRanges();
        //     sel.addRange(range);
        // }

        // // Focus the <div> to show the cursor
        // codeDiv.focus();
    

    return (
        <>
            <div>
                {/* <div
                    id="codit"
                    className="w-[80vw] h-[75vh]"
                    onKeyDown={(e) => {
                        setCode(e.currentTarget.innerText);
                        highlight(e.currentTarget);
                    }}
                    contentEditable={true}
                ></div> */}
                <textarea
                    onChange={(e) => {setCode(e.target.value);}}
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
                            temp =
                                temp.slice(0, index) +
                                "\t" +
                                temp.slice(index, temp.length);
                            setCode(temp);
                            setCurPos(index + 1);
                            event.preventDefault();
                        }
                    }}
                    onKeyUpCapture={(key) => {
                        if (key.key === "Tab") {
                            key.currentTarget.setSelectionRange(curPos, curPos);
                            
                        }
                    }}
                ></textarea>
            </div>
        </>
    );
};

export default Textarea;
