import Agent from './Agent';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

function Agents({ agents }) {

	return (
		
	);
}

export default Agents