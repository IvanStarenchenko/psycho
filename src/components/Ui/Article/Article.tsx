'use client'

import { ReadMore } from '@/components/Ui/Buttons/ReadMore'
import { useState } from 'react'

export interface ArticleProps {
	title: string
	about?: string
	text: string
	quote?: string
	previewSymbols?: number
}

export function Article({
	title,
	about,
	text,
	quote,
	previewSymbols = 220,
}: ArticleProps) {
	const [isOpen, setIsOpen] = useState(false)

	const paragraphs = text ? text.split('\n\n').filter(Boolean) : []
	const firstParagraph = paragraphs[0] ?? ''

	const isLongText = paragraphs.length > 1 || firstParagraph.length > previewSymbols

	return (
		<article className="border-b border-slate-300 py-8 md:py-12 w-full">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 md:gap-16 items-start">
				<div className="flex flex-col gap-y-8 md:gap-y-6">
					<h2 className="font-libre font-bold text-[30px] md:text-[50px] leading-[100%] capitalize text-[var(--brightBrown)] md:text-[var(--darkNavyBlue)]">
						{title}
					</h2>

					{about && (
						<h3 className="font-libre font-semibold md:font-medium text-[22px] md:text-[25px] leading-[100%] capitalize text-[var(--darkNavyBlue)] md:text-slate-700">
							{about}
						</h3>
					)}
				</div>

				<div className="flex flex-col gap-y-5 md:gap-y-6 mt-[25px] md:mt-0">
					{quote && (
						<blockquote className="font-body font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-[130%] text-justify text-[var(--darkNavyBlue)]">
							<i>{quote}</i>
						</blockquote>
					)}

					<div className="space-y-4">
						{isOpen ? (
							paragraphs.map((paragraph, index) => (
								<p
									key={index}
									className="font-body font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-[135%] text-justify hyphens-auto text-[var(--darkNavyBlue)] md:text-slate-800"
								>
									{paragraph}
								</p>
							))
						) : (
							<p className="font-body font-normal text-[16px] sm:text-[18px] md:text-[22px] leading-[135%] text-justify hyphens-auto text-[var(--darkNavyBlue)] md:text-slate-800">
								{firstParagraph.length > previewSymbols
									? `${firstParagraph.slice(0, previewSymbols).trim()}...`
									: firstParagraph}
							</p>
						)}
					</div>

					{isLongText && (
						<div className="pt-2 flex justify-center md:justify-start">
							<ReadMore isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
						</div>
					)}
				</div>
			</div>
		</article>
	)
}