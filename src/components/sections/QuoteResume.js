import { Fragment } from "react";
const QuoteResume = () => {
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
                    <img src="images/jibrankhaliljibran.jpg" alt="Jibran Khalil Jibran" style={{ height:"70px" }} />
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
};
export default QuoteResume;
