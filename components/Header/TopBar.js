export default function TopBar() {
	return (
		<div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-xs-12">
            <ul className="links clearfix">
              <li><i className="lni-phone-handset"></i>+243 999 992 118</li>
              <li><i className="lni-envelope"></i> blaisembombo@gmail.com</li>
              <li><a href="#"><i className="lni-map-marker"></i> Gombe, Kinshasa, RDC</a></li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-4 col-xs-12">
            <div className="roof-social float-right">
              <a className="facebook" href="#"><i className="lni-facebook-filled"></i></a>
              <a className="twitter" href="#"><i className="lni-twitter-filled"></i></a>
              <a className="instagram" href="#"><i className="lni-instagram-filled"></i></a>
              <a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}