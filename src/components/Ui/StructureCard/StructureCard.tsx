'use client'

interface StructureCardProps {
	id: number
	title: string
	text: string
}

export function StructureCard({ id, title, text }: StructureCardProps) {
	const paragraphs = text.split('\n\n')

	return (
		<div className="w-full p-6 md:px-8 md:py-7 rounded-[35px] bg-[var(--lightGreenBlue)] border border-[#c8b5a0]/70 shadow-sm transition-all cursor-pointer hover:shadow-md">
			<h3 className="font-libre font-bold text-[20px] md:text-[22px] leading-[125%] text-center text-[var(--darkNavyBlue)] mb-4">
				{id}. {title}
			</h3>

			<div className="space-y-3 font-body text-justify hyphens-auto text-[15px] md:text-[16px] leading-[145%] text-slate-800">
				{paragraphs.map((p, idx) => (
					<p
						key={idx}
						className={p.startsWith('Online Sessions') ? 'italic font-medium' : ''}
					>
						{p}
					</p>
				))}
			</div>
		</div>
	)
}