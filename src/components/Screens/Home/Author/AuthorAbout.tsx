import { MainButton } from "@/components/Ui/Buttons/MainButton"
export function AuthorAbout() {
	return <div className="flex flex-col gap-[50px] md:gap-10">
		<span className="about-block text-[var(--brightBrown)]">Who accompanies you</span>
		<h2 className='main-title leading-[130%]'>Veronica <br /> Vasylieva</h2>
		<span className="font-libre italic font-semibold text-[var(--greenBlueMid)] text-2xl font-500">Deeper Way of Listening</span>
		<div className="flex flex-col gap-5 mt-6 text-[22px] leading-[120%] font-normal">
			<p>
				Veronica Vasylieva is a Jungian Analytical Psychologist whose work is grounded in the tradition of C.G. Jung and informed by classical and archetypal approaches, including Archetypal Pattern Analysis.
			</p>
			<p>
				Her practice explores the symbolic language of dreams, archetypes, mythology, fairytales, active imagination, and the relationship between the conscious and unconscious psyche.
			</p>
			<p>
				Alongside her analytical training, Veronica has worked in NHS community mental health in London, refugee support, and academic research, accompanying people through periods of transition, loss, trauma, psychological difficulty, and profound change.
			</p>
		</div>
		<MainButton className="w-fit self-center rounded-full" >Find out more</MainButton>
	</div>

}
