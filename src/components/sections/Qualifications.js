import { Fragment } from "react";

const data = [
  {
    icon: "fa fa-code",
    title: "Web Development",
    desc: "Enterprise Applications and eCommerce websites that will help us manage our business, our customer relationship and our products & services.",
    },
    {
        icon: "fa fa-code",
        title: "Restfull APIs",
        desc: "API that will facilitate the interaction between our database and our client applications.",
   },
  {
    icon: "fa fa-music",
    title: "Database Management",
    desc: "Managing the enterprise database objects as well as designing our database to match and suits our business model and business requirements.",
  },
  {
    icon: "fa fa-buysellads",
    title: "Database Optimization",
    desc: "Optimize our database in order to achieve the performance and results needed by our customers and users.",
  },
  {
    icon: "fa fa-gamepad",
    title: "Mobile Development",
      desc: "Create the suitable API as well as helping within the hybrid mobile application development.",
  },
];

const Qualifications = ({ qualificationList }) => {
    const qualifications = qualificationList ? qualificationList : data;
  return (
    <Fragment>
      <div className="content services">
        {/* title */}
        <div className="title">
          <span className="first-word">My</span> Expertise
        </div>
        {/* content */}
        <div className="row service-items border-line-v">
          {/* service item */}
          {qualifications.map((qualification, i) => (
            <div key={i} className="col col-d-6 col-t-6 col-m-12 border-line-h">
              <div className="service-item">
                <div className="icon">
                          <span className={qualification.icon} />
                </div>
                <div className="name">
                    <span>{qualification.title}</span>
                </div>
                <div className="desc">
                  <div>
                    <p>{qualification.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Qualifications;

export const QualificationsClassic = () => {
  return (
    <div className="content services">
      {/* title */}
      <div className="title">My Qualifications</div>
      {/* content */}
      <div className="row service-items border-line-v">
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-code" />
            </div>
            <div className="name">Web Development</div>
            <p>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-music-note" />
            </div>
            <div className="name">Music Writing</div>
            <p>
              Music copying, transcription, arranging and composition services.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-speakerphone" />
            </div>
            <div className="name">Advetising</div>
            <p>
              Advertising services include television, radio, print, mail and
              web.
            </p>
          </div>
        </div>
        {/* service item */}
        <div className="col col-d-6 col-t-6 col-m-12">
          <div className="service-item">
            <div className="icon">
              <span className="ion ion-ios-game-controller-b" />
            </div>
            <div className="name">Game Development</div>
            <p>Developing memorable and unique mobile android, ios games.</p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
