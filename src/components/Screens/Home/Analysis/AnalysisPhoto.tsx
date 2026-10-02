import { Circle } from '@/components/Ui/Moduls/Circle'
import Image from "next/image"
import analysisPhoto from '../../../../assets/images/analysisPhoto.png'

interface AnalysisPhotoProps {
	className?: string
}

export function AnalysisPhoto({ className = '' }: AnalysisPhotoProps) {
	return (
		<div
			className={`relative mt-0 sm:mt-[80px] w-full lg:w-[calc(100%+((100vw-100%)/2))] max-w-[761px] aspect-[861/752] overflow-hidden ${className}`}
		>
			<Image
				src={analysisPhoto}
				alt="Ancient vessels analysis"
				fill
				sizes="(max-width: 1024px) 100vw, 761px"
				className="object-cover"
			/>
			<span className="absolute top-[42%] left-[37%] z-10">
				<Circle index={3} />
			</span>
		</div>
	)
}