import CirclePortrait from "@/assets/about/portrait-circle.png"
import SquarePortrait from "@/assets/images/portrait-square.png"
import Image from "next/image"

interface AuthorProps {
	style: 'square' | 'circle'
	className?: string
}

export function AuthorPortrait({ style, className }: AuthorProps) {
	return (
		<div
			className={`relative flex items-center justify-center w-full aspect-square ${style === 'circle' ? 'max-w-[520px]' : 'max-w-[570px]'
				} ${className ?? ''}`}
		>
			<span
				className={`hidden md:block absolute h-[6px] bg-[var(--brightBrown)] ${style === 'circle'
					? 'top-[45%] right-full w-[100vw]'
					: 'top-[25%] right-full w-[100vw]'
					}`}
			/>

			<Image
				src={style === 'circle' ? CirclePortrait : SquarePortrait}
				alt="Veronica Vasylieva"
				className="object-cover object-center -z-10"
				fill
				priority
				unoptimized
				quality={100}
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
		</div>
	)
}