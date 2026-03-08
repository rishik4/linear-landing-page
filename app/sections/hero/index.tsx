import { type FC } from 'react'
import styles from './styles.module.css'
import LayoutWrapper from '@/components/layout-wrapper'
import BlurPopUpByWord from '@/components/blur-pop-up-by-words'
import { cn } from '@/lib/utils'
import BlurPopUp from '@/components/blur-pop-up'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Sidebar from './components/sidebar'
import SchematicEditor from './components/schematic-editor'
import IllustrateAnimate from '@/components/illustrate-animate'

const Hero: FC = () => {
	return (
		<section className={styles.hero}>
			<LayoutWrapper>
				<h1 className={cn(styles.heading, styles.hide__mobile)}>
					<BlurPopUpByWord text='ProtoFlow is an AI-native tool for designing and building schematics' />
				</h1>

				<h1 className={cn(styles.heading, styles.show__mobile, 'text-center')}>
					<BlurPopUpByWord text='Design circuits with AI' />
				</h1>

				<BlurPopUp delay={1}>
					<h2 className={cn(styles.sub__heading, styles.hide__mobile)}>
						Meet the AI copilot for PCB design. Streamline symbol search,
						auto wiring, and intelligent design assistance.
					</h2>
					<h2 className={cn(styles.sub__heading, styles.show__mobile)}>
						ProtoFlow is an AI-native tool for modern hardware design.
						Streamline symbol search, schematics, and exports.
					</h2>
				</BlurPopUp>

				<div className={cn(styles.button__container)}>
					<BlurPopUp delay={1.1}>
						<Link className={styles.start__link} href='#'>
							{' '}
							Get Started{' '}
						</Link>
					</BlurPopUp>

					<BlurPopUp delay={1.15}>
						<Link className={styles.intoducing__link} href='#'>
							<span>View Documentation</span>
							<ChevronRight />
						</Link>
					</BlurPopUp>
				</div>

				<div className={styles.hero__img__container}>
					<div className={styles.hero__illustration__container}>
						<div className={styles.hero__illustration__perspective}>
							<div className={styles.hero__illustration__base}>
								<div className={styles.hero__illustration__sidebar}>
									<Sidebar />
								</div>
								<div className={styles.hero__illustration__inbox}>
									<SchematicEditor />
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutWrapper>
		</section>
	)
}

export default Hero
