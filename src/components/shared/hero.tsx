import PortfolioItemsGrid from "./portfolio-items-grid";

export default function Hero() {
	return (
		<section className="h-screen flex items-center justify-start pt-10 flex-col gap-10 max-w-[1200px] mx-auto p-4">
			<h1 className="text-5xl md:text-6xl font-bold text-center uppercase text-shadow-2xs font-display">
				<span className="block">Building</span>
				<span className="block"><span>Smarter</span> Apps,</span>
				<span className="block">Faster</span>
			</h1>
      <PortfolioItemsGrid />
		</section>
	);
}
