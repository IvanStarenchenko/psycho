'use client'

import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { AuthorAbout } from '@/components/Screens/Home/Author/AuthorAbout'
import { AuthorPortrait } from '@/components/Ui/AuthorPortrait/AuthorPortrait'

export function Author() {
	return (
		<div className=' -mt-[100px] sm:-mt-[0]'>
			<Wrapper>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-[100px] items-start">
					<div className="flex flex-col sm:hidden">
						<span className="about-block mb-[30px] text-[var(--brightBrown)]">
							Who accompanies you
						</span>
						<h2 className="main-title mb-[20px] leading-[130%]">
							Veronica <br /> Vasylieva
						</h2>
					</div>

					<AuthorPortrait style="square" />
					<AuthorAbout />
				</div>
			</Wrapper>
		</div>
	)
}