import { useState, useEffect } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header';
import Intro from '../components/Intro/Intro';
import PopularHouses from '../components/PopularHouses/PopularHouses'
import Search from '../components/PopularHouses/Search'
import Footer from '../components/Footer'

import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}


function SearchPage() {
  const router = useRouter();
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const { q, state, type, township, town, chs, min, max } = router.query;
    console.log(router.query);
    if (!q && !max){
      // get all houses
      console.log("get all houses");
      client.fetch(`*[_type == "maison"]`)
      .then(result => {
        setHouses(result);
      })
      .catch(console.log);
    } else if (!!q) {
      // text search
      console.log("text search");
      client.fetch(`*[_type == "maison" && [description, state, adresse] match "*${q}*" ]`)
      .then(result => {
        console.log(result);
        setHouses(result);
      })
      .catch(console.log);
    } else {
      // Recherche par propriétés
      console.log("Recherche par propriétés");
      var sanityQuery = `*[_type == "maison"`;
      if (!!state) {
        sanityQuery += ` && state match "*${state}*"`
      }
      if (!!type) {
        sanityQuery += ` && type match "*${type}*"`
      }
      if (!!township) {
        sanityQuery += ` && adresse match "*${township}*"`
      }
      if (!!town) {
        sanityQuery += ` && adresse match "*${township}*"`
      }
      if (!!chs) {
        sanityQuery += ` && chs == ${chs}`
      }
      if (!!min) {
        sanityQuery += ` && prix >= ${min}`
      }
      if (!!max) {
        sanityQuery += ` && prix <= ${max}`
      }
      sanityQuery += " ]";
      client.fetch(sanityQuery)
      .then(result => {
        console.log(result);
        setHouses(result);
      })
      .catch(console.log);
    }
  }, [])

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
      <section id="intro" className="section-intro">
        <div className="search-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="intro-sub-heading">Nous sommes une agence immobilière spécialisée dans la gestion, achat, vente, location et estimation des biens immobiliers.</h4>
                <h2 className="intro-title">Immoban243: Le meilleur est à venir</h2>
                <a href="#" rel="nofollow" className="btn btn-danger btn-lg">ORGANISER UNE RENCONTRE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Search />
      <PopularHouses houses={houses} hideBrowseMore={true}/>

      <Footer />

      <section id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright © 2021 <a rel="nofollow" href="https://mbokart-concept.net">Mbok'art Concept</a> Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </a>

    </div>
  )
}

export default SearchPage;