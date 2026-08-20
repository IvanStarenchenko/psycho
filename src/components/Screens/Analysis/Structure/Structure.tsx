import { structure_data } from '@/app/data/structure_data'
import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import temenosCircleImg from '@/assets/analysis/structure.png'
import { StructureCard } from '@/components/Ui/StructureCard/StructureCard'
import Image from 'next/image'

export function Structure() {
	const getItem = (id: number) => structure_data.find((item) => item.id === id)

	const card1 = getItem(1)
	const card2 = getItem(2)
	const card3 = getItem(3)
	const card4 = getItem(4)
	const card5 = getItem(5)
	const card6 = getItem(6)
	const card7 = getItem(7)

	return (
		<section className=" -mt-[100px] w-full overflow-hidden">
			<Wrapper>
				<div className="mb-12 md:mb-16">
					<span className="about-block text-[var(--brightBrown)] uppercase tracking-wider text-sm font-semibold">
						Structure of analysis/ infographics
					</span>
					<h2 className="main-title text-center mt-4">
						Entering the Temenos
					</h2>
				</div>

				<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">

					<div className="flex flex-col gap-6 lg:gap-10 justify-center">
						{card7 && <StructureCard {...card7} />}
						{card6 && <StructureCard {...card6} />}
					</div>

					<div className="flex flex-col gap-6 lg:gap-8 items-center justify-center">
						{card1 && <StructureCard {...card1} />}

						<div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-2 border-[#c8b5a0] shadow-md shrink-0 my-2">
							<Image
								src={temenosCircleImg}
								alt="Temenos Symbolic Vessel"
								fill
								priority
								className="object-cover object-center"
							/>
						</div>

						{card5 && <StructureCard {...card5} />}
					</div>

					<div className="flex flex-col gap-6 lg:gap-8 justify-center">
						{card2 && <StructureCard {...card2} />}
						{card3 && <StructureCard {...card3} />}
						{card4 && <StructureCard {...card4} />}
					</div>

				</div>
			</Wrapper>
		</section>
	)
}