import { Wrapper } from '@/app/layout/Wrapper/Wrapper'

export function PracticeAndApproach() {
	return (
		<section className="py-12 md:py-16 w-full">
			<Wrapper>
				<div className=" mx-auto flex flex-col ml-[200px] gap-y-12 md:gap-y-16">

					<div className="flex flex-col gap-y-6">
						<h2 className="practice-approach-title">
							Practice And Approach
						</h2>

						<div className="practice-approach-text">
							<p>
								Veronica Vasylieva is a Jungian analytical psychologist whose work is grounded in the tradition of C.G. Jung. Her practice is informed by classical and archetypal Jungian schools and explores the symbolic language of dreams, archetypes, mythology, active imagination, fairytales and the dynamic relationship between 'I' and 'Other'.
							</p>
							<p>
								Alongside her analytical training, Veronica has worked within community mental health of NHS, London, UK, refugee support (RAMA), and academic research (MigRefHealth), accompanying people through periods of transition, loss, trauma, and profound psychological transformation, and psychiatric conditions.
							</p>
							<p>
								Before dedicating herself to analytical psychology, Veronica built an international career in HR, working across the UAE, Italy, and the United Kingdom. Living and working within diverse cultural environments has given her a deep appreciation of the many ways people experience identity, belonging, transition, and meaning.
							</p>
							<p>
								Her analytical work is enriched by longstanding interests in philosophy, yoga, comparative religion, mythology, alchemy, meditation, and the visual arts. Her clients have a background in the business world, the creative and artistic world, health-care, academia and in a variety of other fields. She has significant experience in working with expatriates.
							</p>
							<p>
								She understands the consulting room as a modern <em className="italic font-medium">‘temenos’</em>—a protected psychological space where dreams, symbols, imagination, and unconscious experience may unfold, supporting a deeper relationship with the Self and the lifelong process of individuation.
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-y-6">
						<h2 className="practice-approach-title">
							Clients And Emotional Disorders
						</h2>

						<div className="practice-approach-text">
							<p>
								She works with adults experiencing a range of psychological and emotional difficulties, including anxiety, depression, trauma-related difficulties, low self-esteem, relationship and interpersonal problems, emotional dysregulation, grief and loss, and difficulties associated with major life transitions. Her experience in community mental health and psychiatric settings includes working with people experiencing significant psychological distress and complex presentations affecting their relationships, functioning, sense of self, and everyday life.
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-y-6">
						<h2 className="practice-approach-title">
							Studies & Training
						</h2>

						<ul className="list-disc pl-5 space-y-3 practice-approach-text marker:text-[var(--brightBrown)]">
							<li>
								MA Psychoanalytic and Jungian Studies, with Distinction, University of Essex, UK
							</li>
							<li>
								Postgraduate Clinical Training in Analytical Psychology, Moscow Association of Analytical Psychology (MAAP), part of (IAAP)
							</li>
							<li>
								British Psychotherapy Foundation (BPF), postgraduate training year in Jungian psychotherapy, London, UK
							</li>
							<li>
								Archetypal Pattern Analysis and clinical studies in communicative modality, Institute of Assisi, USA, with Dr Michael Conforti
							</li>
						</ul>
					</div>

				</div>
			</Wrapper>
		</section>
	)
}