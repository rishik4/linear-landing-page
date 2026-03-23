'use client'

import { useEffect, useState, type FC } from 'react'
import GridCell from './grid-cell'
import styles from './styles.module.css'
import UniversityLogo from '../university-logo'
import {
	type UniversityLogoId,
	universityLogosById,
} from '../university-logos'

const gridLogos: Array<[UniversityLogoId, UniversityLogoId, UniversityLogoId]> = [
	['mit', 'carnegieMellon', 'rice'],
	['stanford', 'purdue', 'princeton'],
	['georgiaTech', 'michigan', 'duke'],
	['caltech', 'cornell', 'northwestern'],
	['ucBerkeley', 'virginiaTech', 'pennState'],
	['utAustin', 'illinois', 'ucla'],
]

const renderLogo = (id: UniversityLogoId) => {
	const logo = universityLogosById[id]

	return <UniversityLogo name={logo.name} src={logo.src} variant='grid' />
}

const CustomerList: FC = () => {
	const [layer, setLayer] = useState<number>(1)

	useEffect(() => {
		const changeLayer = () => setLayer((prev) => (prev % 3) + 1)
		const interval = setInterval(changeLayer, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.customer__grid}>
			<div className={styles.logo__grid}>
				{gridLogos.map(([icon1, icon2, icon3]) => (
					<GridCell
						key={`${icon1}-${icon2}-${icon3}`}
						layer={layer}
						icon1={renderLogo(icon1)}
						icon2={renderLogo(icon2)}
						icon3={renderLogo(icon3)}
					/>
				))}
			</div>
		</div>
	)
}

export default CustomerList
