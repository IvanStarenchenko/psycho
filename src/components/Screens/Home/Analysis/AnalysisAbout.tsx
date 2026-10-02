import { MainButton } from '@/components/Ui/Buttons/MainButton'
import { LINKS } from '@/const/path.const'
import Link from 'next/link'
import { AnalysisPhoto } from './AnalysisPhoto'
export function AnalysisAbout() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col ">
				<span className="about-block text-[var(--brightBrown)] mt-[30px] md:mt-[0px] md:text-[var(--lightGreenBlue)]">
					ARCHETYPAL DEPTH ANALYSIS
				</span>
				<h2 className="main-title leading-[115%] text-[var(--darkNavyBlue)] mt-[50px] mb-[30px] sm:mt-[50px] sm:mb-[50px] md:text-white">
					The Journey <br className="hidden md:block" /> Within
				</h2>
			</div>

			<div className="block md:hidden my-2">
				<AnalysisPhoto />
			</div>

			<div className="flex flex-col gap-4 practice-approach-text text-[var(--darkNavyBlue)]! md:text-white/90 text-left">
				<p>
					Jungian analysis is an invitation to turn inward and listen to what is emerging within you. Through dreams, symbols, emotions, relationships, and lived experience, the unconscious speaks in a language that is often indirect and symbolic and fragmented into peaces of the psychic pot, which is you. Together, we begin to listen to this language and bring all the pieces into awareness.
				</p>
				<p>
					The aim is to see a bigger picture of who you are and develop a new relationship to different parts yourself. This will affect in a new rejuvenated way your relationships to ‘other’. And this ‘other’ is then beautifully taking a shape of your body, your relationships, your work, your life, your world.
				</p>
				<p>
					We will also discover what archetypes and archetypal patterns are driving you at this moment, and the moments of past.
				</p>
			</div>

			<div className="pt-2">
				<Link href={LINKS[1].path}>
					<MainButton className="w-full mt-[50px] flex sm:w-fit self-center rounded-full *:">
						Discover The Process
					</MainButton>
				</Link>
			</div>
		</div>
	)
}