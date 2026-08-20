'use client'

import Image, { StaticImageData } from 'next/image'
import { useEffect } from 'react'
import { MainButton } from '../Buttons/MainButton'

interface CardModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	text?: string
	img?: StaticImageData
	bgcolor?: string
}

export function CardModal({
	isOpen,
	onClose,
	title,
	text,
	img,
	bgcolor = 'var(--greenBlueMid)',
}: CardModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen) return null

	const paragraphs = text ? text.split('\n\n').filter(Boolean) : []

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
			<div className="absolute inset-0" onClick={onClose} />

			<div className="relative z-10 w-full max-w-[1024px] max-h-[90vh] md:h-[600px] flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-xl md:rounded-none">

				<div className="hidden md:block w-[180px] bg-white h-full shrink-0" />

				{img && (
					<div className="relative md:absolute md:top-[40px] md:left-[40px] w-full md:w-[260px] h-[220px] sm:h-[280px] md:h-[360px] shrink-0 z-20 shadow-lg overflow-hidden">
						<Image
							src={img}
							alt={title || 'Modal image'}
							fill
							className="object-cover object-top"
						/>
					</div>
				)}

				<div
					className="relative flex-1 h-full overflow-y-auto p-5 sm:p-8 md:p-12 flex flex-col justify-between"
					style={{ backgroundColor: bgcolor }}
				>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 hover:bg-white/70 text-slate-800 flex items-center justify-center text-sm font-bold transition-all z-30 cursor-pointer"
						aria-label="Close modal"
					>
						✕
					</button>

					<div className="pl-0 md:pl-[140px] lg:pl-[160px] pt-2 md:pt-4">
						{title && (
							<h2 className="font-libre font-bold text-[22px] sm:text-[28px] md:text-[36px] leading-[115%] text-slate-900 mb-4 sm:mb-6 pr-6 mt-2 md:mt-0">
								{title}
							</h2>
						)}

						<div className="space-y-4 sm:space-y-5 font-body text-[15px] sm:text-[16px] leading-[150%] text-slate-800/95">
							{paragraphs.length > 0 ? (
								paragraphs.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))
							) : (
								<p>There was once a woman whose life looked perfectly ordinary...</p>
							)}
						</div>
					</div>

					<div className="pt-6 sm:pt-8 pb-2 md:pb-4 pl-0 md:pl-[140px] lg:pl-[160px] flex justify-center md:justify-start">
						<MainButton size="big" fill="primary">
							BEGIN THE CONVERSATION
						</MainButton>
					</div>
				</div>

			</div>
		</div>
	)
}