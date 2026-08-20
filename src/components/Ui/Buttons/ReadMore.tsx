import { ArrowBottom } from './Arrows/Bottom'

interface ReadMoreProps {
	isOpen?: boolean
	onClick?: () => void
}

export function ReadMore({ isOpen = false, onClick }: ReadMoreProps) {
	return (
		<div
			onClick={onClick}
			className="group flex cursor-pointer w-fit items-center gap-x-3 uppercase text-[var(--brightBrown)] text-[20px] transition-colors duration-300 hover:text-[var(--darkNavyBlue)] select-none"
		>
			<span>{isOpen ? 'Read less' : 'Read more'}</span>
			<span
				className={`transition-transform duration-300 ${isOpen
						? 'rotate-180 group-hover:-translate-y-0.5'
						: 'group-hover:translate-y-0.5'
					}`}
			>
				<ArrowBottom />
			</span>
		</div>
	)
}