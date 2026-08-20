'use client'
import { LINKS as links } from "@/const/path.const"
import { useEffect, useState } from "react"
import { createPortal } from 'react-dom'
import { Link } from "./Link"

export function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
			document.body.style.touchAction = 'none'
		} else {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
			document.body.style.touchAction = ''
		}

		return () => {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
			document.body.style.touchAction = ''
		}
	}, [isOpen])
	const mobileMenuContent = (
		<div className="fixed inset-0 top-0 left-0 w-screen h-[100dvh] bg-[var(--darkNavyBlue)] z-[9999] flex flex-col items-center justify-center p-6 md:hidden">
			{/* Крестик */}
			<button
				onClick={() => setIsOpen(false)}
				className="absolute top-6 left-6 text-white/80 hover:text-white p-2 text-3xl font-light focus:outline-none"
				aria-label="Close menu"
			>
				✕
			</button>

			{/* Ссылки */}
			<nav className="w-full">
				<ul className="flex flex-col items-center justify-center text-center gap-8 text-white font-libre text-xl sm:text-2xl tracking-wide w-full">
					{links.map((link) => (
						<li
							key={link.path}
							onClick={() => setIsOpen(false)}
							className="w-full flex justify-center items-center text-center [&>a]:text-center [&>a]:block [&>a]:w-full"
						>
							<Link name={link.name} path={link.path} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)

	return (
		<header className="relative w-full z-50">
			<div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">

				<button
					onClick={() => setIsOpen(true)}
					className="md:hidden text-[var(--brightBrown)] focus:outline-none p-2 -ml-2"
					aria-label="Open menu"
				>
					<div className="w-6 h-4 flex flex-col justify-between">
						<span className="w-full h-0.5 bg-current rounded-full" />
						<span className="w-full h-0.5 bg-current rounded-full" />
						<span className="w-full h-0.5 bg-current rounded-full" />
					</div>
				</button>

				<nav className="hidden md:block mx-auto">
					<ul className="flex gap-[50px] text-[var(--greenBlueLight)] items-center justify-center">
						{links.map((link) => (
							<li key={link.path}>
								<Link name={link.name} path={link.path} />
							</li>
						))}
					</ul>
				</nav>

			</div>

			{isOpen && mounted && createPortal(mobileMenuContent, document.body)}
		</header>
	)
}
