export default {
	name: 'temoignage',
	title: 'Temoignage',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Nom',
			type: 'string'
		},
		{
			name: 'profession',
			title: 'Profession',
			type: 'string'
		},
		{
			name: 'temoignage',
			title: 'Temoignage',
			type: 'text'
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