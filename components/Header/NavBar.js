import { useState } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import Link from "next/link";
export default function NavBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: { q: search },
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white"
      data-toggle="sticky-onscroll"
    >
      <div className="container">
        <div className="navbar-header">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto w-100 justify-content-center"></ul>
          <div className="search-add float-right">
            <form method="post" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  name="field-name"
                  placeholder="Rechercher..."
                  required=""
                />
                <button type="submit" className="search-btn">
                  <span className="lni-search"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ul className="mobile-menu">
        <li>
          <div className="search-add float-right container">
            <form method="get" action="/search" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="search"
                  name="q"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher..."
                  required=""
                />
                <button type="submit" className="search-btn">
                  <span className="lni-search"></span>
                </button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
}
