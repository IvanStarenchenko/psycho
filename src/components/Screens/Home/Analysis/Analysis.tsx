import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { AnalysisAbout } from './AnalysisAbout'
import { AnalysisPhoto } from './AnalysisPhoto'

export function Analysis() {
	return (
		<section className="bg-[var(--lightGreenBlue)] md:bg-[var(--lightBrown)] py-10 md:py-[80px] w-full overflow-hidden transition-colors duration-300">
			<Wrapper>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-[100px] items-center">
					<AnalysisAbout />

					<div className="hidden md:block">
						<AnalysisPhoto />
					</div>
				</div>
			</Wrapper>
		</section>
	)
}