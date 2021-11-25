import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="404">
            <h1 className="err-head">Error 404</h1>
            <p className="err-para">You Are Looking for Something that Does Not exist <br /> or Is forbidden</p>
            <NavLink to="/" id="err-btn">BACK TO HOME PAGE</NavLink>
        </div>
    );
}

export default ErrorPage;