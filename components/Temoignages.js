import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function Temoignages({ temoignages }){
	return (
		<section className="testimonial section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="testimonials" className="owl-carousel">
            	{temoignages && temoignages.map((temoignage) => (
            		<div className="item" key={temoignage.name}>
	                <div className="testimonial-item">
	                  <div className="content">
	                    <p className="description">{temoignage.temoignage}</p>
	                  </div>
	                </div>
	                <div className="client-info">
	                  <div className="img-thumb">
	                    <img src={urlFor(temoignage.image).url()} alt={temoignage.name} />
	                  </div>
	                  <div className="info-text">
	                    <h2><a href="#">{temoignage.name}</a></h2>
	                    <h4><a href="#">{temoignage.profession}</a></h4>
	                  </div>
	                </div>
	              </div>
            	))}
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}