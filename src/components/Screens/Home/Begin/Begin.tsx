import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import beginBg from '@/assets/images/beginBlock.png'
import { BoldCenterLine } from '@/components/Ui/BoldCenterLine/BoldCenterLine'
import { MainButton } from '@/components/Ui/Buttons/MainButton'
import Image from 'next/image'

export function Begin() {
	return (
		<section className="relative w-full overflow-hidden py-2 md:py-16">
			<BoldCenterLine>
				<Wrapper>
					<div className="relative w-full bg-[var(--lightBrown)] lg:bg-transparent min-h-[520px] sm:min-h-[585px] px-6 sm:px-10 md:px-16 py-12 md:py-16 flex items-center overflow-hidden mb-[50px] md:mb-[100px]">


						<div className="absolute inset-x-0 top-12 bottom-12 lg:inset-0 z-0">
							<Image
								src={beginBg}
								alt="Every Journey Begins With A First Step Into The Unknown"
								fill
								priority
								quality={100}
								unoptimized
								sizes="100vw"
								className="object-cover object-center brightness-90 lg:brightness-100"
							/>
						</div>

						<div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-8 md:gap-12 items-center w-full my-auto">
							<div className="flex flex-col gap-y-3 sm:gap-y-6 max-w-[680px] text-white text-left">
								<h2 className="font-libre font-bold text-3xl sm:text-4xl md:text-[50px] leading-[115%] capitalize">
									Every Journey Begins With A First Step Into The Unknown
								</h2>

								<p className="font-body font-normal text-xl sm:text-lg md:text-[20px] leading-[130%] text-white/95">
									especially when it feels like oh no, its not the right time, not enough..
								</p>
							</div>

							<div className="flex justify-center lg:justify-end shrink-0 pt-2 lg:pt-0">
								<MainButton size="big" fill="primary" className="w-full sm:w-auto">
									BEGIN THE CONVERSATION
								</MainButton>
							</div>
						</div>

					</div>
				</Wrapper>
			</BoldCenterLine>
		</section>
	)
}