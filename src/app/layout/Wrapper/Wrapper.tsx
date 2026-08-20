export function Wrapper({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<div className={["max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8", className].filter(Boolean).join(" ")}>
			{children}
		</div>
	)
}