import { useState } from 'react';
import Image from 'next/image'
import Router from 'next/router'

export default function NavBar(){

  const [search, setSearch] = useState("");
  const [searchMobile, setSearchMobile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    window.location = `/search?q=${search}`;
  }

  const onMobileSubmit = (e) => {
    e.preventDefault();
    window.location = `/search?q=${searchMobile}`;
  }

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white"  data-toggle="sticky-onscroll">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
          	<img src="/logo.png" alt="logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-center">
          </ul>
          <div className="search-add float-right">
            <form method="post" onSubmit={onSubmit}>
              <div className="form-group">
                  <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} name="field-name" placeholder="Rechercher..." required="" />
                  <button type="submit" className="search-btn"><span className="lni-search"></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ul className="mobile-menu">
        <li> 
          <div className="search-add float-right container">
            <form method="get" action="/search" onSubmit={onMobileSubmit}>
              <div className="form-group">
                  <input type="search" name="q" value={searchMobile} onChange={(e) => setSearchMobile(e.target.value)}  placeholder="Rechercher..." required=""/>
                  <button type="submit" className="search-btn"><span className="lni-search"></span></button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </nav>
	);
}