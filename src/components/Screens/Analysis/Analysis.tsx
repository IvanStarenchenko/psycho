import { Begin } from '../Home/Begin/Begin'
import { Articles } from './Articles/Articles'
import { Contact } from './Articles/Contact/Contact'
import { Hero } from './Hero/Hero'
import { Structure } from './Structure/Structure'

export function Analysis() {
	return <section className="flex flex-col gap-y-[50px] md:gap-y-[100px] py-0 sm:py-4">
		<Hero />
		<Articles />
		<Begin />
		<Structure />
		<Contact />
	</section>
}
