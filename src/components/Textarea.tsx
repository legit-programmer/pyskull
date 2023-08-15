
interface props {
    code: string;
    setCode: any;
    
}

const Textarea = ({ setCode }: props) => {
    
    return (
        <>
            <div>
                <textarea
                    onChange={(e) => setCode(e.target.value)}
                    className="font-code p-2 w-[80vw] h-[75vh] bg-[#171A2F] text-white text-xl"
                    cols={30}
                    rows={10}
                />
            </div>
            
        </>
    );
};

export default Textarea;
