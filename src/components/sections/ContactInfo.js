const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39149.023526614794!2d9.92681913881927!3d52.174075671972595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47baaf1f4f4e74c5%3A0x744622d890779db0!2sG%C3%BCldenfeld%2077%2C%2031135%20Hildesheim!5e0!3m2!1sen!2sde!4v1724661234423!5m2!1sen!2sde"
    style={{ border: 0, width: "100%", height: "100%" }}
    allowFullScreen=""
    loading="lazy"
/>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address </strong> Hildescheim, Deutschland
              </li>
              <li>
                <strong>Email </strong> contact@echammas.com
              </li>
              <li>
                <strong>Mobile </strong> +49 17838 22619
              </li>
              <li>
                <strong>Skype </strong> echammas.info
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
