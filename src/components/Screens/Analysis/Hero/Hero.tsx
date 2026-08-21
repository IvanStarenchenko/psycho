import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import heroImg from '@/assets/analysis/hero.png'
import { BoldCenterLine } from '@/components/Ui/BoldCenterLine/BoldCenterLine'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from 'next/image'

export function Hero() {
	return (
		<section className="bg-[var(--lightGreenBlue)] lg:bg-transparent pt-8 lg:pt-0">
			<Wrapper>
				<div className="flex flex-col gap-4 lg:gap-0">
					<span className="about-block text-[var(--brightBrown)]">
						Archetypal Depth analysis
					</span>
					<h1 className="main-title mt-4 lg:mt-[50px] mb-6 lg:mb-[100px] text-3xl sm:text-4xl lg:text-[50px]">
						The Journey Within
					</h1>
				</div>
			</Wrapper>

			<BoldCenterLine>
				<Wrapper>
					<div className="relative w-full">
						<div className="relative w-full h-[320px] sm:h-[450px] lg:h-[650px] overflow-hidden">
							<Image
								src={heroImg}
								alt="Hero Image"
								fill
								priority
								quality={100}
								unoptimized
								sizes="100vw"
								className="object-cover object-center brightness-90 lg:brightness-100"
							/>
						</div>

						<span className="hidden lg:block absolute top-[35%] left-[48%] z-10">
							<Circle index={3} />
						</span>
					</div>

					<div className="font-libre font-[600] text-[22px] leading-relaxed block lg:hidden py-8 text-[var(--brightBrown)] space-y-6">
						<p >
							Every Vessel Carries The Marks Of Its Making. Some Are Chipped By Loss, Others Cracked By Transition Or Burden. Yet The Value Of An Ancient Vessel Lies Not In Its Perfection, But In The Story It Carries.
						</p>
						<p >
							Jungian Analysis Is A Space To Explore The Symbolic Patterns Held Within Your Own Story, Where The Fragments Of Experience Can Begin To Form A More Meaningful Whole.
						</p>
					</div>
				</Wrapper>
			</BoldCenterLine>
		</section>
	)
}