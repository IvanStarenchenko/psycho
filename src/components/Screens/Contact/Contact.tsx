import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import contact from '@/assets/contact/01.png'
import Image from 'next/image'

export function Contact() {
	return (
		<section className="w-full ">
			<Wrapper>
				<div className="flex flex-col ">
					<span className="about-block text-[var(--brightBrown)] uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2">
						Contact
					</span>
					<h1 className="main-title mt-[30px] mb-[50px] lg:mt-[50px] mb-6 lg:mb-[100px] text-3xl sm:text-4xl lg:text-[50px]">
						When Psyche <br className="sm:hidden" />
						Calls
					</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
					<div className="order-1 lg:order-2 relative w-full max-w-[568px] aspect-[568/728] mx-auto overflow-hidden rounded-lg shadow-sm">
						<Image
							src={contact}
							alt="Archetypal Symbol"
							fill
							priority
							quality={95}
							className="object-cover object-center"
						/>
					</div>

					<div className="order-2 lg:order-1 flex flex-col pt-0 lg:pt-2">
						<h2 className="font-libre font-bold text-[32px] sm:text-[40px] md:text-[50px] leading-[105%] text-[var(--brightBrown)]">
							Veronica Vasylieva
						</h2>

						<p className="font-body text-[13px] sm:text-[16px] tracking-widest text-slate-600 uppercase mt-3 mb-8 lg:mb-12">
							Archetypal Depth Analyst
						</p>

						<div className="space-y-2">
							<p className="font-libre font-bold text-[18px] sm:text-[22px] text-[var(--brightBrown)]">
								Email:
							</p>
							<a
								href="mailto:veronica.analytical.psychologist@gmail.com?subject=Inquiry%20from%20the%20website&body=Hello%20Veronica%2C%0A%0AI'm%20contacting%20you%20through%20your%20website.%0A%0A"
								className="inline-block font-body text-[16px] sm:text-[20px] text-slate-800 hover:text-[var(--brightBrown)] transition-colors underline underline-offset-4 decoration-slate-300 hover:decoration-[var(--brightBrown)] break-all sm:break-normal"
							>
								veronica.analytical.psychologist@gmail.com
							</a>
						</div>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}