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
		<section className="w-full overflow-hidden">
			<Wrapper>
				<div className="mb-12 md:mb-16 text-center">
					<span className="about-block block mb-7 text-[var(--brightBrown)] uppercase tracking-wider text-xs md:text-sm font-semibold">
						Structure of analysis/ infographics
					</span>
					<h2 className="main-title text-center mt-2 md:mt-4 text-2xl sm:text-3xl md:text-5xl">
						Entering the Temenos
					</h2>
				</div>

				<div className="flex flex-col items-center gap-8 lg:hidden">
					<div className="relative w-[340px] h-[340px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-2 border-[#c8b5a0] shadow-md shrink-0 mb-2">
						<Image
							src={temenosCircleImg}
							alt="Temenos Symbolic Vessel"
							fill
							priority
							className="object-cover object-center"
						/>
					</div>

					{card1 && <StructureCard {...card1} />}
					{card2 && <StructureCard {...card2} />}
					{card3 && <StructureCard {...card3} />}
					{card4 && <StructureCard {...card4} />}
					{card5 && <StructureCard {...card5} />}
					{card6 && <StructureCard {...card6} />}
					{card7 && <StructureCard {...card7} />}
				</div>

				<div className="hidden lg:grid max-w-[1200px] mx-auto grid-cols-3 gap-8 items-center">
					<div className="flex flex-col gap-10 justify-center">
						{card7 && <StructureCard {...card7} />}
						{card6 && <StructureCard {...card6} />}
					</div>

					<div className="flex flex-col gap-8 items-center justify-center">
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

					<div className="flex flex-col gap-8 justify-center">
						{card2 && <StructureCard {...card2} />}
						{card3 && <StructureCard {...card3} />}
						{card4 && <StructureCard {...card4} />}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}