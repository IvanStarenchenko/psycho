import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { MainButton } from '@/components/Ui/Buttons/MainButton'

export function Contact() {
	return (
		<section className="w-full">
			<Wrapper>
				<div className="flex w-full items-center justify-between py-[50px] border-y border-[var(--brightBrown)] self-stretch">
					<span className="font-libre text-[18px] sm:text-[28px] md:text-[25px] text-[var(--darkNavyBlue)] font-[500]">
						Ready to begin your journey?
					</span>
					<MainButton fill="tertiary" className="rounded-[48px] shrink-0">
						Contact Me
					</MainButton>
				</div>
			</Wrapper>
		</section>
	)
}