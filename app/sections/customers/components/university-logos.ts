export const universityLogosById = {
	mit: {
		name: 'MIT',
		src: '/universities/mit.svg',
	},
	stanford: {
		name: 'Stanford',
		src: '/universities/stanford.png',
	},
	georgiaTech: {
		name: 'Georgia Tech',
		src: '/universities/georgia-tech.svg',
	},
	caltech: {
		name: 'Caltech',
		src: '/universities/caltech.png',
	},
	ucBerkeley: {
		name: 'UC Berkeley',
		src: '/universities/uc-berkeley.svg',
	},
	utAustin: {
		name: 'UT Austin',
		src: '/universities/ut-austin.svg',
	},
	carnegieMellon: {
		name: 'Carnegie Mellon',
		src: '/universities/carnegie-mellon.png',
	},
	purdue: {
		name: 'Purdue',
		src: '/universities/purdue.svg',
	},
	michigan: {
		name: 'Michigan',
		src: '/universities/michigan.png',
	},
	cornell: {
		name: 'Cornell',
		src: '/universities/cornell.svg',
	},
	virginiaTech: {
		name: 'Virginia Tech',
		src: '/universities/virginia-tech.svg',
	},
	illinois: {
		name: 'Illinois',
		src: '/universities/illinois.png',
	},
	rice: {
		name: 'Rice',
		src: '/universities/rice.svg',
	},
	princeton: {
		name: 'Princeton',
		src: '/universities/princeton.svg',
	},
	duke: {
		name: 'Duke',
		src: '/universities/duke.svg',
	},
	northwestern: {
		name: 'Northwestern',
		src: '/universities/northwestern.svg',
	},
	pennState: {
		name: 'Penn State',
		src: '/universities/penn-state.svg',
	},
	ucla: {
		name: 'UCLA',
		src: '/universities/ucla.svg',
	},
} as const

export const universityLogoOrder = [
	'mit',
	'stanford',
	'georgiaTech',
	'caltech',
	'ucBerkeley',
	'utAustin',
	'carnegieMellon',
	'purdue',
	'michigan',
	'cornell',
	'virginiaTech',
	'illinois',
	'rice',
	'princeton',
	'duke',
	'northwestern',
	'pennState',
	'ucla',
] as const

export type UniversityLogoId = (typeof universityLogoOrder)[number]

export const universityLogos = universityLogoOrder.map((id) => ({
	id,
	...universityLogosById[id],
}))
