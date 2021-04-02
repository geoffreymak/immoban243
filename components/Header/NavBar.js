import Image from 'next/image'

export default function NavBar(){
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white"  data-toggle="sticky-onscroll">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            <span className="lin-menu"></span>
          </button>
          <a className="navbar-brand" href="index.html">
          	<img src="/logo.png" alt="logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-center">
          </ul>
          <div className="search-add float-right">
            <form method="post">
              <div className="form-group">
                  <input type="search" name="field-name" placeholder="Rechercher..." required=""/>
                  <button type="submit" className="search-btn"><span className="lni-search"></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ul className="mobile-menu">
        <li>
          <div className="search-add float-right container">
            <form method="post">
              <div className="form-group">
                  <input type="search" name="field-name" placeholder="Rechercher..." required=""/>
                  <button type="submit" className="search-btn"><span className="lni-search"></span></button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </nav>
	);
}