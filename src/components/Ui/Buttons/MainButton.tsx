'use client'

import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	size?: 'big' | 'medium' | 'small'
	fill?: 'primary' | 'secondary' | 'tertiary'
	href?: string
	className?: string
}

export function MainButton({
	children,
	size = 'medium',
	fill = 'primary',
	href = '/contact',
	className = '',
	...props
}: ButtonProps) {
	const baseStyles =
		'flex w-full sm:w-auto sm:inline-flex items-center justify-center font-medium text-center transition-all duration-300 border active:scale-95 select-none leading-none shadow-md hover:shadow-lg'

	const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
		big: 'px-6 sm:px-10 md:px-[66px] py-4 sm:py-5 md:py-[25px] rounded-[50px] text-sm sm:text-base md:text-lg tracking-wider',
		medium: 'px-5 sm:px-8 md:px-[72px] py-[17px] md:py-[16px] rounded-[20px] text-sm md:text-base',
		small: 'px-4 sm:px-6 md:px-[40px] py-2.5 md:py-[12px] rounded-[20px] text-xs md:text-sm',
	}

	const fillStyles: Record<NonNullable<ButtonProps['fill']>, string> = {
		primary:
			'bg-white border-[var(--brightBrown)] border-2 text-[var(--brightBrown)] hover:bg-[var(--brightBrown)] hover:text-white',

		secondary:
			'bg-transparent border-[var(--lightBrown)] text-[var(--lightBrown)] hover:bg-[var(--lightBrown)] hover:text-white',

		tertiary:
			'bg-[var(--brightBrown)] border-[var(--lightBrown)] text-white hover:opacity-90',
	}

	const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${fillStyles[fill]} ${className}`.trim()

	if (props.onClick || props.type === 'submit' || props.disabled) {
		return (
			<button className={combinedClasses} {...props}>
				{children}
			</button>
		)
	}

	return (
		<Link href={href} className={combinedClasses}>
			{children}
		</Link>
	)
}