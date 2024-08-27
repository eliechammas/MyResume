import { Fragment } from "react";
const bio_ = ` <p>
<strong>Hello! I’m Donald Wellborn.</strong>
Back-end &amp; Frond-end developer from UK, London. I have rich
experience in wordpress, also I am good at Magento. I love to
talk with you about our unique.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
                <ul>
                              <li>
                                  <strong>Email </strong> contact@echammas.com
                    </li>
                    <li>
                        <strong>Mobile </strong> +49 17838 22619
                    </li>
                    <li>
                        <strong>Residence </strong> Hildescheim, Germany
                    </li>
                    <li>
                        <strong>Skype </strong> echammas.live
                    </li>
                </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">About Me</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
              I am Ryan Adlard, web designer from USA, California. I have rich
              experience in web site design and building and customization, also
              I am good at wordpress. I love to talk with you about our unique.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Email . . . . .</strong> contact@echammas.com
              </li>
              <li>
                <strong>Mobile . . . . .</strong> +49 17838 22619
              </li>
              <li>
                <strong>Residence . . . . .</strong> Hildescheim, Germany
              </li>
              <li>
                <strong>Skype . . . . .</strong> echammas.live
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
