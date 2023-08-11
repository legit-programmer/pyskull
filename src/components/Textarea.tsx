
import axios from "axios";

const Textarea = () => {
    const sendCode = () => {
      axios.post('http://127.0.0.1:5000/hammer', "asdfasf",
      {
        headers:{
          'Content-Type':'text/html'
        }
      })
    };
    return (
        <>
            <div className="">
                <textarea
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
