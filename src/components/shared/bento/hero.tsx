import LeafletLocation from "@/components/map";

export default function BentoHero() {
	return (
		<div className="grid grid-rows-7 grid-cols-11 gap-4 w-full h-full">
			<div className="row-start-1 row-end-4 size-full col-start-1 col-end-4 overflow-hidden">
				<LeafletLocation />
			</div>
			<div className="row-start-1 row-end-4 size-full col-start-4 col-end-8 bg-blue-500" />
			<div className="row-start-1 row-end-3 size-full col-start-8 col-end-12 bg-green-500 rounded-3xl" />
			<div className="row-start-3 row-end-5 size-full col-start-8 col-end-12 bg-green-500 rounded-3xl" />
			<div className="size-full col-start-1 col-end-4 rounded-3xl flex items-center justify-stretch">
				<div className="flex items-center justify-between flex-1 h-full">
					<a href="/" className="bg-accent h-full flex items-center justify-center border border-input group rounded-xl aspect-square">
						Link 1
					</a>
					<a href="/" className="bg-accent h-full flex items-center justify-center border border-input group rounded-xl aspect-square">
						Link 2
					</a>
					<a href="/" className="bg-accent h-full flex items-center justify-center border border-input group rounded-xl aspect-square">
						Link 3
					</a>
				</div>
			</div>
			<div className="size-full col-start-4 col-end-8 bg-yellow-500 rounded-3xl" />
			<div className="row-start-5 row-end-7 size-full col-start-1 col-end-6 bg-yellow-500 rounded-3xl" />
			<div className="row-start-5 row-end-7 size-full col-start-6 col-end-12 bg-yellow-500 rounded-3xl" />
		</div>
	);
}