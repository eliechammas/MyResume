import { Fragment } from "react";
const Quote = ({ section}) => {
    switch (section) {
        case 'about':
            return (
                <Fragment>
                    <div className="content quote">
                        {/* title */}
                        <div className="title">
                            <span>Quote</span>
                        </div>
                        {/* content */}
                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="revs-item">
                                    <div className="text">
                                        <div>
                                            <p>When you really desire something from the heart and soul, all the universe conspires you to achieve it (The Alchemist - Paulo Coelho)</p>
                                        </div>
                                    </div>
                                    <div className="user">
                                        <div className="img">
                                            <img src="images/thealchemist.jpg" alt="Paolo Coehlo" style={{ height: "70px" }} />
                                        </div>
                                        <div className="info">
                                            <div className="name">Paolo Coelho</div>
                                            <div className="company">The Alchemist</div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </Fragment>
            );
        case 'skills':
            return (
                <Fragment>
                    <div className="content quote">
                        {/* title */}
                        <div className="title">
                            <span>Quote</span>
                        </div>
                        {/* content */}
                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="revs-item">
                                    <div className="text">
                                        <div>
                                            Software is a great combination between artistry and engineering!
                                        </div>
                                    </div>
                                    <div className="user">
                                        <div className="img">
                                            <img src="images/billgates.jpg" alt="Bill Gates" style={{ height: "70px" }} />
                                        </div>
                                        <div className="info">
                                            <div className="name">Bill Gates</div>
                                            <div className="company">Microsoft</div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </Fragment>
            );

        case 'Resume':
            return (
                <Fragment>
                    <div className="content quote">
                        {/* title */}
                        <div className="title">
                            <span>Quote</span>
                        </div>
                        {/* content */}
                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="revs-item">
                                    <div className="text">
                                        <div>
                                            Let there be spaces in your togetherness, And let the winds of the heavens dance between you.<br />
                                            Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls
                                        </div>
                                    </div>
                                    <div className="user">
                                        <div className="img">
                                            <img src="images/jibrankhaliljibran.jpg" alt="Jibran Khalil Jibran" style={{ height: "70px" }} />
                                        </div>
                                        <div className="info">
                                            <div className="name">Jibran Khalil Jibran</div>
                                            <div className="company">The Prophet</div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </Fragment>
            );
        default:

    }
    
};
export default Quote;
