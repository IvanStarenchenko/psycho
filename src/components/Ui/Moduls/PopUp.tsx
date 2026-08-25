'use client'

interface PopUpProps {
	top: string
	text: string
	variant?: 'bird' | 'shadow' | 'depth' | 'vessel' | 'dance'
	onClose?: () => void
}

export function PopUp({
	top,
	text,
	variant = 'bird',
	onClose,
}: PopUpProps) {
	const variantClasses = {
		bird: 'bg-[var(--brightBrown)] text-white',
		shadow: 'bg-[var(--lightGreenBlue)] text-[var(--darkNavyBlue)]',
		depth: 'bg-[var(--darkNavyBlue)] text-white',
		vessel: 'bg-[var(--peach)] text-[var(--blueMid)]',
		dance: 'bg-[var(--lightGreenBlue)] text-[var(--darkBlue)]',
	}

	const key = variant.replace(/\s+/g, '_') as keyof typeof variantClasses
	const currentClass = variantClasses[key] ?? variantClasses.bird

	const paragraphs = text ? text.split('\n\n').filter(Boolean) : []

	return (
		<div className={`w-full h-full sm:h-auto p-5 sm:p-8 transition-all sm:rounded-2xl shadow-2xl sm:max-h-[80vh] overflow-y-auto custom-scrollbar ${currentClass}`}>
			{onClose && (
				<div className="flex justify-end mb-4 sm:mb-6">
					<button
						onClick={onClose}
						className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-slate-800 flex items-center justify-center text-sm sm:text-base font-bold transition-all cursor-pointer hover:bg-opacity-90 active:scale-95 shadow"
						aria-label="Close"
					>
						✕
					</button>
				</div>
			)}

			<h2 className="font-['Libre_Baskerville',serif] text-[22px] sm:text-[25px] font-medium leading-[110%] capitalize mb-4 sm:mb-6">
				{top}
			</h2>

			<div className="space-y-4">
				{paragraphs.map((paragraph, idx) => (
					<p
						key={idx}
						className="font-['Open_Sans',sans-serif] text-[16px] sm:text-[20px] font-normal leading-[140%] sm:leading-[120%] text-justify tracking-normal"
					>
						{paragraph}
					</p>
				))}
			</div>
		</div>
	)
}