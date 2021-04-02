export default function Agent({ img, name }) {
	return (
		<div className="col-sm-6 col-md-6 col-lg-3">
      <div className="team-item text-center">
        <div className="team-img">
          <img className="img-fluid" src={img} alt="Agent Immobilier"/>
          <div className="team-overlay">
            <div className="overlay-social-icon text-center">
              <ul className="social-icon-team">
                <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="lni-instagram-filled" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="info-text">
          <h3><a href="#">{name}</a></h3>
          <p>Agent Immobilier</p>
        </div>
      </div>
    </div>
	);
}