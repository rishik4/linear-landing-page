type Props = {
	name: string
	src: string
	variant: 'grid' | 'marquee'
}

const stylesByVariant = {
	grid: {
		width: '150px',
		maxHeight: '40px',
	},
	marquee: {
		width: '120px',
		maxHeight: '35px',
	},
} as const

const UniversityLogo = ({ name, src, variant }: Props) => (
	// eslint-disable-next-line @next/next/no-img-element
	<img
		src={src}
		alt={name}
		loading='lazy'
		decoding='async'
		style={{
			...stylesByVariant[variant],
			height: 'auto',
			maxWidth: '100%',
			display: 'block',
			objectFit: 'contain',
			filter: 'brightness(0) invert(1)',
			opacity: 0.85,
		}}
	/>
)

export default UniversityLogo
