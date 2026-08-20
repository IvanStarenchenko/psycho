'use client'

import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { ReadMore } from '../Buttons/ReadMore'
import { CardModal } from './CardModal'

interface CardProps {
	bgcolor?: string
	img?: StaticImageData
	title?: string
	text?: string
}

export function Card({ bgcolor, img, title, text }: CardProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div
				className="p-4 sm:p-5 md:p-[16px] flex text-center flex-col items-center justify-between flex-1 w-full"
				style={{ backgroundColor: bgcolor }}
			>
				<div className="w-full">
					{img && (
						<div className="relative w-full aspect-[4/5] md:h-[480px] mb-5 md:mb-[30px] overflow-hidden">
							<Image
								src={img}
								alt={title || 'card alt'}
								fill
								sizes="(max-width: 768px) 100vw, 33vw"
								className="object-cover object-center md:object-top"
							/>
						</div>
					)}

					{title && (
						<h3 className="font-libre font-medium mb-5 md:mb-[30px] text-xl sm:text-[22px] md:text-[25px] leading-[120%]">
							{title}
						</h3>
					)}
				</div>

				<div onClick={() => setIsOpen(true)} className="cursor-pointer">
					<ReadMore />
				</div>
			</div>

			<CardModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={title}
				text={text}
				img={img}
				bgcolor={bgcolor}
			/>
		</>
	)
}