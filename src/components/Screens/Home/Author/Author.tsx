import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { AuthorAbout } from "@/components/Screens/Home/Author/AuthorAbout"
import { AuthorPortrait } from "@/components/Ui/AuthorPortrait/AuthorPortrait"

export function Author() {
	return <div>
		<Wrapper>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-[100px] items-start">
				<AuthorPortrait style="square" />
				<AuthorAbout />
			</div>
		</Wrapper></div>
}
