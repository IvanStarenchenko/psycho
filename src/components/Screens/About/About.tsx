import { Begin } from '../Home/Begin/Begin'
import { Hero } from './Hero/Hero'
import { PracticeAndApproach } from './PracticeAndApproach/PracticeAndApproach'

export function About() {
	return <section className='flex flex-col gap-y-[25px] md:gap-y-[50px] py-4 '>
		<Hero />
		<PracticeAndApproach />
		<Begin />
	</section>
}
