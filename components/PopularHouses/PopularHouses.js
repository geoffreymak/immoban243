import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function PopularHouses({ houses, hideBrowseMore }){
	return (
		<section className="property section-padding">
      <div className="container">
      	<div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">{ hideBrowseMore ? "Resultats" : "Les plus populaires"}</h2>
              <p>Explorer notre catalogue des maisons de qualité.</p>
            </div>
          </div>
        </div>
        {(!!hideBrowseMore && !!houses && !houses.length) && (
        	<div style={{ display: 'flex', justifyContent: 'center' }}>
        		<h4>Aucun résultat</h4>
        	</div>
        )}
        <div className="row">
        	{houses && houses.map((house) => (
        		<div key={house.description} className="col-lg-4 col-md-6 col-xs-12">
	            <div className="property-main">
	              <div className="property-wrap">
	                <div className="property-item">
	                  <div className="item-thumb">
	                    <a className="hover-effect" href="#">
	                      <img className="img-fluid" src={urlFor(house.image).url()} alt="Maison"/>
	                    </a>
	                    <div className="label-inner">
	                    	{house.new && (<span className="label-status label bg-yellow">New</span>)}
	                    	{(house.type == "avendre" && !house.new) && <span className="label-status label bg-red">A VENDRE</span>}
	                    	{(house.type == "alouer" && !house.new) && <span className="label-status label">A LOUER</span>}
	                    </div>
	                  </div>
	                  <div className="item-body">
	                    <h3 className="property-title"><a href="property.html">{house.description}</a></h3>
	                    <div className="adderess"><i className="lni-map-marker"></i>{house.adresse}</div>
	                    <div className="pricin-list">
	                      <div className="property-price">
	                        <span>${house.prix}</span>
	                      </div>
	                     <p><span>{house.chs + ' '} chs</span> . <span>{house.sb + ' '} sb</span> . <span>{house.m2 + ' '} m<sup>2</sup></span></p>
	                    </div>
	                  </div>               
	                </div>              
	              </div>
	            </div>
	          </div>
        	))}
        </div>
        {!hideBrowseMore && <div className="col-12">
          <div className="text-center">
            <a href="/search" className="btn btn-common">Tout voir</a>
          </div> 
        </div>}
      </div>
    </section>
	)
}