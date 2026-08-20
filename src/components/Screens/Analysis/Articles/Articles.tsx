
import { article_data } from '@/app/data/articles.data'
import { Wrapper } from '@/app/layout/Wrapper/Wrapper'
import { Article } from '@/components/Ui/Article/Article'
import type { IArticle } from '@/interfaces/article.interface'
export function Articles() {

	return <section >
		<Wrapper>
			{article_data.map((article: IArticle) => (
				<Article
					key={article.id}
					title={article.title}
					about={article.about}
					quote={article.quote}
					text={article.text}
				/>
			))}
		</Wrapper>
	</section>
}
