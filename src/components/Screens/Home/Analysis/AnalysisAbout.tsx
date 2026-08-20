import { ArrowRight } from '@/components/Ui/Buttons/Arrows/Right'
import { AnalysisPhoto } from './AnalysisPhoto'

export function AnalysisAbout() {
	return (
		<div className="flex flex-col gap-5 md:gap-8">
			<div className="flex flex-col gap-2">
				<span className="about-block text-[var(--brightBrown)] md:text-[var(--lightGreenBlue)]">
					ARCHETYPAL DEPTH ANALYSIS
				</span>
				<h2 className="main-title leading-[115%] text-[var(--darkNavyBlue)] md:text-white">
					The Journey <br className="hidden md:block" /> Within
				</h2>
			</div>

			<div className="block md:hidden my-2">
				<AnalysisPhoto />
			</div>

			<h3 className="block md:hidden font-libre text-lg sm:text-2xl leading-[135%] text-[var(--brightBrown)] font-normal">
				Every Vessel Carries The Marks Of Its Making. Some Are Chipped By Loss, Others Cracked By Transition Or Burden. Yet The Value Of An Ancient Vessel Lies Not In Its Perfection, But In The Story It Carries.
			</h3>

			<div className="flex flex-col gap-4 text-base sm:text-lg lg:text-[22px] leading-[140%] font-normal text-[var(--darkNavyBlue)] md:text-white/90 text-left">
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
				<button className="group w-fit font-libre text-lg sm:text-[22px] text-white font-semibold flex items-center gap-x-4 sm:gap-x-12 transition-all duration-300 ease-out hover:gap-x-6 hover:opacity-80">
					<span className="transition-transform duration-300 group-hover:translate-x-1">
						Discover The Process
					</span>
					<span className="transition-transform duration-300 group-hover:translate-x-1">
						<ArrowRight />
					</span>
				</button>
			</div>
		</div>
	)
}