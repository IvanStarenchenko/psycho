'use client'

import { MainButton } from '@/components/Ui/Buttons/MainButton'

export function AuthorAbout() {
	return (
		<div className="flex flex-col gap-12 md:gap-10">
			<div className="hidden sm:flex sm:flex-col sm:gap-4">
				<span className="about-block text-[var(--brightBrown)]">
					Who accompanies you
				</span>
				<h2 className="main-title leading-[130%]">
					Veronica <br /> Vasylieva
				</h2>
			</div>

			<span className="font-libre italic font-semibold text-black sm:text-[var(--greenBlueMid)] text-2xl font-500 -mt-2 sm:mt-0">
				Deeper Way of Listening
			</span>

			<div className="flex flex-col gap-5 text-[22px] leading-[120%] font-normal">
				<p>
					Veronica Vasylieva is a Jungian Analytical Psychologist whose work is
					grounded in the tradition of C.G. Jung and informed by classical and
					archetypal approaches, including Archetypal Pattern Analysis.
				</p>
				<p>
					Her practice explores the symbolic language of dreams, archetypes,
					mythology, fairytales, active imagination, and the relationship
					between the conscious and unconscious psyche.
				</p>
				<p>
					Alongside her analytical training, Veronica has worked in NHS
					community mental health in London, refugee support, and academic
					research, accompanying people through periods of transition, loss,
					trauma, psychological difficulty, and profound change.
				</p>
			</div>

			<MainButton className="w-full sm:w-fit self-center sm:self-start rounded-full">
				Find out more
			</MainButton>
		</div>
	)
}