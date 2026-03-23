import { type FC } from 'react'
import styles from './styles.module.css'
import UniversityLogo from '../university-logo'
import { universityLogos } from '../university-logos'

const CustomerMarquee: FC = () => {
	return (
		<div className={styles.marquee}>
			<div className={styles.marquee__container}>
				<div className={styles.marquee__inner__container}>
					{universityLogos.map((logo) => (
						<UniversityLogo
							key={logo.id}
							name={logo.name}
							src={logo.src}
							variant='marquee'
						/>
					))}
				</div>
				<div className={styles.marquee__inner__container}>
					{universityLogos.map((logo) => (
						<UniversityLogo
							key={`${logo.id}-duplicate`}
							name={logo.name}
							src={logo.src}
							variant='marquee'
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CustomerMarquee
