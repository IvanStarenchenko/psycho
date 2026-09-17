import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { Cards } from './Cards'
import { Top } from './Top'

export function Myth() {
	return (
		<section className=" border-b border-[var(--lightBrown)] border-solid pb-0 md:pb-[100px]">
			<Wrapper>
				<div className="flex flex-col gap-y-8 md:gap-y-[50px]">
					<Top />
					<Cards />
				</div>
			</Wrapper>
		</section>
	)
}