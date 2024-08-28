import { Fragment } from "react";
const Quote = () => {
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
                  When you really desire something from the heart and soul, all the universe conspires you to achieve it (The Alchemist - Paulo Coelho)
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="images/man1.jpg" alt="Elie Chammas" />
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
};
export default Quote;
