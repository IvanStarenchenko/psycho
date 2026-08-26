import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import dance from "@/assets/about/dance.png"
import { AuthorPortrait } from '@/components/Ui/AuthorPortrait/AuthorPortrait'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from "next/image"

export function Hero() {
	return (
		<section className="relative w-full overflow-x-hidden">
			<Wrapper>
				<div className="flex flex-col ml-0 sm:ml-[110px] ">
					<span className="about-block uppercase  text-[var(--brightBrown)] ">
						Who Accompanies you
					</span>
					<h1 className="main-title mt-[30px] mb-[50px] lg:mt-[50px] mb-6 lg:mb-[100px] text-3xl sm:text-4xl lg:text-[50px] md:text-[var(--darkNavyBlue)]">
						The Path and work
					</h1>
				</div>
			</Wrapper>

			<div className="max-w-[1400px] mx-auto">
				<div className="relative w-full mb-[120px] lg:mb-0">

					<div className="relative w-full lg:w-[82%] ml-auto aspect-[1182/680] overflow-hidden rounded-none sm:rounded-xl shadow-sm z-0">
						<Image
							src={dance}
							alt="The Path and work"
							fill
							priority
							quality={95}
							className="object-cover object-center"
						/>
					</div>

					<div className="absolute z-20 shrink-0
            w-[241px] h-[241px] bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%]
            lg:w-[380px] lg:h-[380px] lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0
            xl:w-[460px] xl:h-[460px]"
					>
						<AuthorPortrait style="circle" />
					</div>

				</div>
			</div>

			<span className="hidden lg:block absolute top-[45%] right-[40%] z-10">
				<Circle index={4} />
			</span>
		</section>
	)
}