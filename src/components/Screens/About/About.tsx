import { Begin } from '../Home/Begin/Begin'
import { Hero } from './Hero/Hero'
import { PracticeAndApproach } from './PracticeAndApproach/PracticeAndApproach'

export function About() {
	return <div className='flex flex-col gap-y-[50px]'>
		<Hero />
		<PracticeAndApproach />
		<Begin />
	</div>
}
