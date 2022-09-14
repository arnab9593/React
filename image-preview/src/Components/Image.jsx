import { useRef, useState } from "react";

const Image = () => {
    const ref = useRef(null);
    const [image, setImage] = useState("");
    const handleSubmit = () => {
        setImage(ref.current.value);
        ref.current.focus();
        // setImage('');
    }
    
    return (
        <>
            <div>
                <h2>Image Preview</h2>
                <input type="url" name="image" placeholder="Enter Image URL" ref={ref} />
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div>
                <img src={image} alt="No image available"></img>
            </div>
        </>
    )

}
export default Image