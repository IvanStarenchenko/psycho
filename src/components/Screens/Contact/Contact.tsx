import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import contact from '@/assets/contact/01.png'
import Image from 'next/image'

export function Contact() {
	return (
		<section className="  w-full">
			<Wrapper>
				<div className="flex flex-col mb-12 md:mb-16">
					<span className="about-block text-[var(--brightBrown)] uppercase tracking-wider text-xl ">
						Contact
					</span>
					<h1 className="main-title mt-2">
						When Psyche Calls
					</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ">

					<div className="flex flex-col pt-2 sm:pt-6">
						<h2 className="font-libre font-bold text-[36px] sm:text-[44px] md:text-[50px]  leading-[105%]">
							Veronica Vasylieva
						</h2>

						<p className="font-body text-[14px] sm:text-[16px] tracking-widest text-slate-600 uppercase mt-3 mb-10">
							Archetypal Depth Analyst
						</p>

						<div className="space-y-2">
							<p className="font-libre font-bold text-[20px] sm:text-[22px] text-[var(--darkNavyBlue)]">
								Email:
							</p>
							<a
								href="mailto:veronica.analytical.psychologist@gmail.com"
								className="inline-block font-body text-[18px] sm:text-[20px] text-slate-800 hover:text-[var(--brightBrown)] transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-[var(--brightBrown)]"
							>
								veronica.analytical.psychologist@gmail.com
							</a>
						</div>
					</div>

					<div className="relative w-full max-w-[568px] aspect-[568/728] mx-auto overflow-hidden rounded-lg shadow-sm">
						<Image
							src={contact}
							alt="Archetypal Symbol"
							fill
							priority
							quality={95}
							className="object-cover object-center"
						/>
					</div>

				</div>


			</Wrapper>
		</section>
	)
}
