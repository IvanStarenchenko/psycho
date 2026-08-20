import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import dance from "@/assets/about/dance.png"
import { AuthorPortrait } from '@/components/Ui/AuthorPortrait/AuthorPortrait'
import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from "next/image"

export function Hero() {
	return (
		<section className="w-full overflow-x-hidden  py-8 md:py-12">
			<Wrapper>
				<div className="flex flex-col items-center ml-0 gap-3 mb-12 md:mb-16">
					<span className="about-block uppercase text-left text-[var(--brightBrown)] tracking-wider">
						Who Accompanies you
					</span>
					<h1 className="main-title">
						The Path and work
					</h1>
				</div>
			</Wrapper>

			<div className="max-w-[1400px] mx-auto px-4 sm:px-6">
				<div className="relative w-full max-w-[1182px] ml-auto">

					<div className="absolute -left-[60px] sm:-left-[180px] lg:-left-[307px] top-[10%] lg:top-[80px] z-10 shrink-0">
						<AuthorPortrait style="circle" />
					</div>

					<div className="relative w-full aspect-[1182/861] overflow-hidden rounded-xl shadow-sm">
						<Image
							src={dance}
							alt="The Path and work"
							fill
							priority
							quality={95}
							className="object-cover object-center"
						/>
					</div>

				</div>

			</div>
			<span className="absolute top-[75%] right-[40%]">
				<Circle index={4} />
			</span>
		</section>
	)
}