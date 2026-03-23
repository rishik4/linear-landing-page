import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'
import CustomerList from './components/customer-list'
import CustomerMarquee from './components/customer-marquee'

const Customers: FC = () => {
	return (
		<section className={styles.customers}>
			<LayoutWrapper>
				<p className={styles.description__large__screen}>
					<span className={styles.highlight}>
						Trusted by students at top universities.
					</span>
					<br />
					From engineering labs to senior capstone projects.
				</p>

				<p className={styles.description__small__screen}>
					Trusted by students at top universities. From engineering labs
					to senior capstone projects.
				</p>

				<div className={styles.customer__list__container}>
					<CustomerList />
				</div>
			</LayoutWrapper>
			<div className={styles.customer__marquee__container}>
				<CustomerMarquee />
			</div>
		</section>
	)
}

export default Customers
