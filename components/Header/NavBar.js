import Image from 'next/image'

export default function NavBar(){
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white"  data-toggle="sticky-onscroll">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">
          	<img src="/logo.png" alt="logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-center">
          </ul>
        </div>
      </div>

      <ul className="mobile-menu">
        
      </ul>
    </nav>
	);
}