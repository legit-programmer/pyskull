import axios from "axios";

interface props {
    code: string;
    setCode: any;
    
}

const Textarea = ({ setCode }: props) => {
    
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
            
        </>
    );
};

export default Textarea;
