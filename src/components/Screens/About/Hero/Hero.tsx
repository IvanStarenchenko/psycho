import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import dance from "@/assets/about/dance.png"
import { AuthorPortrait } from '@/components/Ui/AuthorPortrait/AuthorPortrait'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from "next/image"

export function Hero() {
	return (
		<section className="relative w-full overflow-x-hidden py-8 md:py-12">
			<Wrapper>
				<div className="flex flex-col items-center text-right ml-0  mb-8 md:mb-16">
					<span className="about-block uppercase mb-[30px] text-left text-[var(--brightBrown)] tracking-wider">
						Who Accompanies you
					</span>
					<h1 className="main-title text-center mb-[50px]">
						The Path and work
					</h1>
				</div>
			</Wrapper>

			<div className="max-w-[1400px] mx-auto px-4 sm:px-6">
				<div className="relative w-full max-w-[1182px] ml-auto mb-[120px] lg:mb-0">

					<div className="relative w-[calc(100%+2rem)] -mx-4 sm:w-full sm:mx-0 aspect-[1182/861] overflow-hidden rounded-none sm:rounded-xl shadow-sm z-0">
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
            lg:w-[520px] lg:h-[520px] lg:left-[-260px] lg:top-[80px] lg:bottom-auto lg:translate-x-0 lg:translate-y-0"
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