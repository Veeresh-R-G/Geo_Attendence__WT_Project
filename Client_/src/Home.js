
/*    

------------------------------------------HOME COMPONENT--------------------------------------------

*/


const Home = () => {
    return (
        <div className="HomePage">
            <div className="btns">
                <form action="/login">
                    <button className="Login">LOGIN</button>
                    <button formAction='/register' className="Register">REGISTER</button>
                </form>
            </div>
        </div>
    );
}

export default Home;