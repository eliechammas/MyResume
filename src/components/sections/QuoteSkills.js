import { Fragment } from "react";
const QuoteSkills = () => {
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
                    <img src="images/billgates.jpg" alt="Bill Gates" style={{ height:"70px" }} />
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
};
export default QuoteSkills;
