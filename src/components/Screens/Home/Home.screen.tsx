import { Analysis } from './Analysis/Analysis'
import { Author } from './Author/Author'
import { Begin } from './Begin/Begin'
import { Hero } from "./Hero/Hero"
import { Myth } from './Myth/Myth'

export function HomeScreen() {
	return <div className="flex flex-col gap-y-[50px] ">
		<Hero />
		<Author />
		<Analysis />
		<Myth />
		<Begin />
	</div>
}
