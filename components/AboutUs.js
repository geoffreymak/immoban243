export default function AboutUs(){
	return (
		<section className="featured-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">A propos de nous</h2>
              <p>Notre agence opère sur l'immobilier depuis 2005.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img className="img-fluid" src="/about/img-2.jpg" alt="Chez nous"/>
          </div>
          <div className="col-md-12 col-lg-6 col-xs-12">
            <h2 className="intro-title">Qui sommes-nous ?</h2>
            <h3 className="title-sub">Meilleur entreprise immobilier <br/>Affaire immobilière en RDC 2019</h3>
            <p className="intro-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum, doloremque quaerat sit tempora eius est reiciendis accusamus magnam quae. Explicabo dolore officia, iure a ullam aliquam nemo excepturi, repellat. uod ut delectus ad tempora.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-medall"></i>
                  </div>
                  <h3><a href="#">Entreprise certifié</a></h3>
                  <div className="featured-content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum debitis aperiam nam cumque. Expedita, vitae.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-thumbs-up"></i>
                  </div>
                  <h3><a href="#">Très experimenté</a></h3>
                  <div className="featured-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, in facere ea quisquam quidem quaerat!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}