export function Footer() {
	return (
		<footer className="w-full flex flex-col items-center justify-center gap-2 sm:gap-3 py-6 md:py-[30px] px-4 text-center text-[var(--brightBrown)] text-sm leading-relaxed">
			<p className="max-w-[600px] md:max-w-none">
				Online psychotherapy worldwide <span className="hidden xs:inline">•</span> <br className="block xs:hidden" />
				In-person sessions (London, Dubai, Crete)
			</p>
			<p>© 2022 Veronica Vasylieva, Analytical Psychologist. All rights reserved.</p>
		</footer>
	)
}