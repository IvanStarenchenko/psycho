import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import heroImg from '@/assets/analysis/hero.png'
import { BoldCenterLine } from '@/components/Ui/BoldCenterLine/BoldCenterLine'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from 'next/image'

export function Hero() {
	return (
		<section>
			<Wrapper>
				<span className="about-block text-[var(--brightBrown)]">
					Archetypal Depth analysis
				</span>
				<h1 className="main-title mt-[50px] mb-[100px]">The Journey Within</h1>
			</Wrapper>

			<BoldCenterLine>
				<Wrapper>
					<div className="relative w-full h-[555px] md:h-[650px] overflow-hidden">
						<Image
							src={heroImg}
							alt="Hero Image"
							fill
							priority
							quality={100}
							unoptimized
							sizes="100vw"
							className=" relative object-cover object-center brightness-90"
						/>
					</div>
					<span className="absolute top-[35%] left-[48%]"><Circle index={3} /></span>
				</Wrapper>
			</BoldCenterLine>
		</section>
	)
}