import { cards_data } from '@/app/data/cards.data'
import { Card } from '@/components/Ui/Cards/Card'

export function Cards() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-[50px] w-full">
			<Card bgcolor="var(--greenBlueMid)" img={cards_data[0].image} title={cards_data[0].title} text={cards_data[0].text} />
			<Card bgcolor="var(--lightGreenBlue)" img={cards_data[1].image} title={cards_data[1].title} text={cards_data[1].text} />
			<Card bgcolor="var(--peach)" img={cards_data[2].image} title={cards_data[2].title} text={cards_data[2].text} />
		</div>
	)
}