'use client'

import { moduls_data } from '@/app/data/moduls.data'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { PopUp } from './PopUp'

const VARIANTS = ['bird', 'shadow', 'depth', 'vessel', 'dance'] as const

interface CircleProps {
	index: number
}

export function Circle({ index }: CircleProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [mounted, setMounted] = useState(false)
	const data = moduls_data[index]

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	if (!data) return null

	const handleMouseEnter = () => {
		if (window.matchMedia('(hover: hover)').matches) {
			setIsOpen(true)
		}
	}

	const handleMouseLeave = () => {
		if (window.matchMedia('(hover: hover)').matches) {
			setIsOpen(false)
		}
	}

	const handleClick = () => {
		if (!window.matchMedia('(hover: hover)').matches) {
			setIsOpen((prev) => !prev)
		}
	}

	const handleClose = () => setIsOpen(false)

	return (
		<div className="relative inline-block">
			<div
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="w-10 h-10 bg-white/30 border-2 border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white/60 hover:scale-110 active:scale-95"
			/>

			{isOpen && mounted && createPortal(
				<div
					className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
					onClick={handleClose}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div
						className="w-full max-w-[600px] pointer-events-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<PopUp
							top={data.top}
							text={data.text}
							variant={VARIANTS[index % VARIANTS.length]}
							onClose={handleClose}
						/>
					</div>
				</div>,
				document.body
			)}
		</div>
	)
}