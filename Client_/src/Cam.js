import Webcam from "react-webcam";
import { useRef } from "react";
const Cam = () => {
    const faceRef = useRef(null);
    return (
        <div className="faceCam">
            <Webcam ref={faceRef} />
        </div>
    );
}

export default Cam;