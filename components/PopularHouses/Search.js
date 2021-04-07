import { useState } from 'react'
import Router from 'next/router'

export default function Search(){
  const [state, setState] = useState('');
  const [type, setType] = useState('');
  const [township, setTownship] = useState('');
  const [town, setTown] = useState('');
  const [chs, setChs] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000000);

  const onSubmit = () => {
  	var newLocation = `/search?`;
  	if (!!state) newLocation += `&state=${state}`;
  	if (!!type) newLocation += `&type=${type}`;
  	if (!!township) newLocation += `&township=${township}`;
  	if (!!town) newLocation += `&town=${town}`;
  	if (!!chs) newLocation += `&chs=${chs}`;
  	newLocation += `&min=${min}&max=${max}`
    window.location = newLocation;
  }

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
                  <select value={type} onChange={e => setType(e.target.value)} className="classic">
                    <option>Toutes les actions</option>
                    <option value="alouer">Locations</option>
                    <option value="avendre">Ventes</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select value={state} onChange={e => setState(e.target.value)} className="classic">
                    <option value="">Tous les types</option>
                    <option value="appartement">Appartements</option>
                    <option value="maison">Maisons</option>
                    <option value="entrepot">Entrepôt</option>
                    <option value="terrain">Terrains</option>
                    <option value="bureau">Bureaux</option>
                    <option value="studio">Studios</option>                              
                    <option value="villa">Villas</option>
                    <option value="immeuble">Immeuble</option>
                    <option value="concession">Concession</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select value={township} onChange={e => setTownship(e.target.value)} className="classic">
                    <option>Toutes les communes</option>
                    <option value="gombe">Gombe</option>
                    <option value="n'djili">N'djili</option>
                    <option value="matete">Matete</option>
                    <option value="limete">Limete</option>
                    <option value="kasa-vubu">Kasa-Vubu</option>
                    <option value="bandal">Bandal</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="text-right btn-section">
                <button onClick={onSubmit} type="button" className="btn btn-common"><i className="lni-search"></i> Recherchez</button>
              </div>
            </div>
          </div>
          <div className="row range-slider option-hide" style={{display: "none"}}>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select value={town} onChange={e => setTownship(e.target.value)} className="classic">
                    <option>Toutes les provinces</option>
                    <option value="kinshasa">Kinshasa</option>
                    <option value="kongo-central">Kongo-central</option>
                    <option value="mai-ndombe">Mai-ndombe</option>
                    <option value="haut-uele">Haut-uele</option>
                    <option value="nord-kivu">Nord-kivu</option>
                    <option value="maniema">Maniema</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select value={chs} onChange={e => setChs(e.target.value)} className="classic">
                      <option>Chambres</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>                              
                      <option value="8">8</option>
                    </select>
                  </label>
                </div>
              </div>
            <div className="col-lg-3 col-md-6 col-xs-12" style={{ marginBottom: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
              <h6 style={{ marginRight: 10 }}>Prix minimum: {"  " + min}</h6>
              <input style={{ width: "100%" }} type="number" id="rangeMin" value={min} min="0" max="1000000" onChange={(e) => setMin(e.target.value)} name="rangeMin" />
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12" style={{ marginBottom: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
              <h6 style={{ marginRight: 10 }}>Prix maximum: {"  " + max}</h6>
              <input style={{ width: "100%" }} type="number" id="rangeMax" value={max} min="100" max="1000000" onChange={(e) => setMax(e.target.value)} name="rangeMax" />
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