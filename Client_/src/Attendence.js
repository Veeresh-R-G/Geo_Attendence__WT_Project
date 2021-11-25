
import Mymap from "./Mymap";
import Cam from "./Cam";
const Atten = () => {

    return (
        <div className="atten">
            <div className="wrapper">
                <div className="div1">
                    <h1>FACE DETECTION</h1>
                    <div className="face">
                        <Cam />
                    </div>
                </div>
                <div className="div2">

                    <h1 style={{ color: "white" }}> CURRENT LOCATION</h1>
                    <div className="location" id="map">
                        <Mymap />
                    </div>

                </div>

            </div>

            <form action="/auth">
                <button className="attn-sub-btn" type="submit">GIVE ATTENDENCE</button>
            </form>

        </div >
    );
}


export default Atten;