export default function Search(){
	return (
		<div className="search-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Recherche par propriétés</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>Toutes les actions</option>
                    <option>Locations (12)</option>
                    <option>Ventes (17)</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>Tous les types</option>
                    <option>Appartements (3)</option>
                    <option>Maisons (2)</option>
                    <option>Industrie (2)</option>
                    <option>Terres (3)</option>
                    <option>Bureaux (1)</option>
                    <option>Salons (2)</option>                              
                    <option>Villas (1)</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>Toutes les villes</option>
                    <option>Kinshasa</option>
                    <option>Kikwit</option>
                    <option>Matadi</option>
                    <option>Lubumbashi</option>
                    <option>Goma</option>
                    <option>Kindu</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="text-right btn-section">
                <button type="button" className="btn btn-common"><i className="lni-search"></i> Recherchez</button>
              </div>
            </div>
          </div>
          <div className="row range-slider option-hide" style={{display: "none"}}>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>Toutes les provinces</option>
                    <option>Kinshasa</option>
                    <option>Kongo-central</option>
                    <option>Mai-ndombe</option>
                    <option>Haut-uele</option>
                    <option>Nord-kivu</option>
                    <option>Maniema</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select className="classic">
                      <option>Chambres</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>                              
                      <option>8</option>
                    </select>
                  </label>
                </div>
              </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <input type="text" id="range"  name="range" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text-left">
              <a href="#" className="show-options"> Plus d'options</a>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}