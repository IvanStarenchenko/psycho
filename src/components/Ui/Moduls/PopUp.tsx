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
		<div className={`relative p-6 sm:p-8 transition-all rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto ${currentClass}`}>
			{onClose && (
				<button
					onClick={onClose}
					className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-current flex items-center justify-center text-base font-bold transition-all cursor-pointer z-10"
					aria-label="Close"
				>
					✕
				</button>
			)}

			<h2 className="font-heading-en text-xl sm:text-2xl md:text-3xl mb-4 font-normal pr-8">
				{top}
			</h2>

			<div className="space-y-3 sm:space-y-4">
				{paragraphs.map((paragraph, idx) => (
					<p
						key={idx}
						className="font-body text-sm md:text-base leading-relaxed opacity-95"
					>
						{paragraph}
					</p>
				))}
			</div>
		</div>
	)
}