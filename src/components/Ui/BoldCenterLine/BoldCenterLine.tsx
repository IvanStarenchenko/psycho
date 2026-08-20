export function BoldCenterLine({
	children,
	gbC = '#d0dbe0'
}: {
	children: React.ReactNode
	gbC?: string
}) {
	return (
		<div className="relative w-full">
			<div
				className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[312px] -z-10"
				style={{ backgroundColor: gbC }}
			/>

			{children}
		</div>
	)
}