import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import heroImg from '@/assets/analysis/hero.png'
import { BoldCenterLine } from '@/components/Ui/BoldCenterLine/BoldCenterLine'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from 'next/image'

export function Hero() {
	return (
		<section className="bg-[var(--lightGreenBlue)] lg:bg-transparent pt-8 lg:pt-0">
			<Wrapper>
				<div className="flex flex-col ">
					<span className="about-block text-[var(--brightBrown)]">
						Archetypal Depth analysis
					</span>
					<h1 className="main-title mt-[30px] mb-[50px] lg:mt-[50px] mb-6 lg:mb-[100px] text-3xl sm:text-4xl lg:text-[50px]">
						The Journey Within
					</h1>
				</div>
			</Wrapper>

			<BoldCenterLine>
				<Wrapper >
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

						<span className=" absolute top-[35%] left-[48%] z-10">
							<Circle index={3} />
						</span>
					</div>


				</Wrapper>
			</BoldCenterLine>
		</section>
	)
}