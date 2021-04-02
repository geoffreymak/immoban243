import Agent from './Agent';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

function Agents({ agents }) {

	return (
		<section id="team" className="section-padding text-center">
			<div className="container">
				<div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Nos Agents</h2>
              <p>Des experts immobiliers avec des années d'experience dans le domaine.</p>
            </div>
          </div>
        </div>
        <div className="row">
        	{agents && agents.map((agent) => (<Agent img={urlFor(agent.image).url()} name={agent.name} key={agent.name} />))}
        </div>
			</div>
		</section>
	);
}

export default Agents