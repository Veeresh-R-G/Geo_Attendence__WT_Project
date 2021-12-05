const Menu = () => {
    let list = ['GIVE ATTENDENCE',
        'CHECK PREVIOUS RECORDS',
        'BLANK-1',
        'BLANK-2',
    ]
    return (
        <div className="menuWrapper">
            <div className="menu">
                <div className="row1">

                    <div className="box">
                        <a href="/attendence">
                            <h1><h1>
                                <br />
                                {list[0]}
                            </h1></h1>
                        </a>
                    </div>

                    <div className="box">
                        <a href="/blank">
                            <h1><h1>
                                <br />
                                <br />
                                {list[2]}
                            </h1></h1>
                        </a>
                    </div>

                </div>

                <div className="row2">
                    {/*Check Prev Records*/}
                    <div className="box">
                        <a href="/rec">
                            <h1><h1>
                                <br />
                                {list[1]}!
                            </h1></h1>
                        </a>
                    </div>
                    <div className="box">
                        <a href="/blank">
                            <h1><h1>
                                <br />
                                <br />
                                {list[3]}
                            </h1></h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;