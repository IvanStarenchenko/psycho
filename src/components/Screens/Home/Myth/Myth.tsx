import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { Cards } from './Cards'
import { Top } from './Top'

export function Myth() {
	return (
		<section className="py-10 md:py-0 md:pb-[50px] border-b border-[var(--lightBrown)] border-solid">
			<Wrapper>
				<div className="flex flex-col gap-y-8 md:gap-y-[50px]">
					<Top />
					<Cards />
				</div>
			</Wrapper>
		</section>
	)
}