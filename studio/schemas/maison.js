export default {
	name: 'maison',
	title: 'Maison',
	type: 'document',
	fields: [
		{
			name: 'description',
			title: 'description',
			type: 'string'
		},
		{
			name: 'type',
			title: 'Type de service',
			type: 'string',
			options: {
				list: [
					{ value: 'avendre', title: 'A VENDRE'},
					{ value: 'alouer', title: 'A LOUER'},
				]
			}
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
        hotspot: true
      }
		},
		{
			name: 'prix',
			title: 'Prix',
			type: 'number'
		},
		{
			name: 'adresse',
			title: 'Adresse',
			type: 'string'
		},
		{
			name: 'chs',
			title: 'Nombre des chambres',
			type: 'number',
		},
		{
			name: 'sb',
			title: 'Nombre des salles de bains',
			type: 'number',
		},
		{
			name: 'm2',
			title: 'Nombre de mètres carées',
			type: 'number',
		},
		{
			name: 'new',
			title: 'Nouveau',
			type: 'boolean'
		}
	]
}