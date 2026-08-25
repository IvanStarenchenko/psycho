import NextLink from 'next/link'

export function Link({ name, path }: { name: string; path: string }) {
	return (
		<NextLink
			href={path}
			className="inline-block text-white sm:text-[var(--greenBlueMid)] transition-all duration-300 hover:-translate-y-0.5 hover:text-(--brightBrown)"
		>
			{name}
		</NextLink>
	)
}