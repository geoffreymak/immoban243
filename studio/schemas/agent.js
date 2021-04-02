export default {
	name: 'agent',
	title: 'Agent',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Nom',
			type: 'string'
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
        hotspot: true
      }
		}
	]
}