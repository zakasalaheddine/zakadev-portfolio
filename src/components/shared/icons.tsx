import * as LucidIcons from "lucide-react";

export type Icon = React.SVGProps<SVGSVGElement>

export const Icons = {
	...LucidIcons,
	BgGrid: (props: React.SVGProps<SVGSVGElement>) => (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern
					id="hero"
					width="80"
					height="80"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#hero)"
			/>
		</svg>
	),
};
