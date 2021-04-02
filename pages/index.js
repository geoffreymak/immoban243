import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import Agents from '../components/Agent/Agents';
import Special from '../components/Special'
import PopularHouses from '../components/PopularHouses/PopularHouses'
import Search from '../components/PopularHouses/Search'
import Latest from '../components/PopularHouses/Latest'
import AboutUs from '../components/AboutUs'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Temoignages from '../components/Temoignages'


import client from '../client'

function Home({ agents, houses, temoignages }) {
  return (
    <div>
      <Head>
        <title>Immoban243</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" type="text/css" href="/owl.carousel.css"/>

        <script src="/js/jquery-min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/jquery.mixitup.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/ion.rangeSlider.js"></script>
        <script src="/js/jquery.parallax.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/wow.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.slicknav.js"></script>
        <script src="/js/nivo-lightbox.js"></script>
        <script src="/js/jquery.slicknav.js"></script>
        <script src="/js/main.js"></script>
      </Head>
      <Header />
      <Intro />
      <Search />
      <PopularHouses houses={houses} />
      <Agents agents={agents} />
      <Special />
      <Latest houses={houses} />
      <AboutUs />
      <Counter />

      <section id="intro" className="section-intro">
        <div className="search-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="intro-sub-heading">Pour des logements de qualité.</h4>
                <h2 className="intro-title">Immoban243: un expert de confiances</h2>
                <a href="https://rebrand.ly/estatebit-purchase-ud" rel="nofollow" className="btn btn-danger btn-lg">ACHETEZ MAINTENANT</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Temoignages temoignages={temoignages} />

      <Footer />

      <section id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright © 2021 <a rel="nofollow" href="https://google.com?Mbok'art">Mbok'art Concept</a> Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

      <div id="preloader">
        <div className="loader" id="loader-1"></div>
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const agents = await client.fetch(`*[_type == "agent"]{
    name,
    image
  }`);

  const houses = await client.fetch(`*[_type == "maison"]`);

  const temoignages = await client.fetch(`*[_type == "temoignage"]`);
  return { agents, houses, temoignages }
}

export default Home;