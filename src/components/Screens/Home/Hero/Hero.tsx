import { Wrapper } from "@/app/layout/Wrapper/Wrapper"
import { MainButton } from "@/components/Ui/Buttons/MainButton"
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from "next/image"
import mainImg from "../../../../assets/images/hero-image.png"

export function Hero() {
	return (
		<section className="relative w-full min-h-[100dvh] pt-8 sm:pt-16 lg:pt-[81px] pb-8 sm:pb-12 lg:pb-[100px] flex flex-col items-start lg:items-center text-left lg:text-center overflow-hidden">
			<Image
				src={mainImg}
				alt="Archetypal Depth Analysis background"
				fill
				priority
				quality={100}
				sizes="100vw"
				unoptimized
				className="object-cover object-[85%_center] lg:object-center -z-10"
			/>

			<Wrapper className="relative flex flex-col items-start lg:items-center w-full flex-1 z-10">
				<div className="w-full max-w-[1213px]">
					<h1 className="main-title text-white text-left lg:text-center">
						ARCHETYPAL DEPTH ANALYST
					</h1>
				</div>

				<h3 className="hero-subtitle text-lg sm:text-2xl lg:text-[30px] leading-[130%] lg:leading-[120%] text-white/90! sm:text-white! text-left lg:text-center max-w-[808px] w-full mt-auto lg:mt-8 mb-6 lg:mb-0">
					When the patterns of your life no longer make sense, there may be something deeper asking to be understood
				</h3>

				<div className="w-full flex justify-center lg:mt-auto">
					<MainButton size="big" fill="primary">
						BEGIN THE CONVERSATION
					</MainButton>
				</div>

				<span className="absolute top-[48%] left-[20%] lg:top-[290px] lg:left-[48%] z-20">
					<Circle index={1} />
				</span>

				<span className="absolute top-[58%] left-[62%] lg:top-[350px] lg:left-auto right-[8%] sm:right-[15%] lg:right-[13%] z-20">
					<Circle index={0} />
				</span>

				<span className="absolute top-[70%] left-[20%] lg:top-[520px] sm:left-[12%] lg:left-[9%] z-20">
					<Circle index={2} />
				</span>
			</Wrapper>
		</section>
	)
}