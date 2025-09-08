import { TanstackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import DynamicIsland from "@/components/shared/dynamic-island";
import { Icons } from "@/components/shared/icons";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "ZakaDev",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<DynamicIsland />
				<main className="pt-20">{children}</main>
				<Icons.BgGrid
					className="absolute inset-0 w-full h-[150vh] -z-10 dark:stroke-[rgba(255,250,245,0.06)] stroke-[rgba(0,0,0,0.1)] animate-[svgMask_1.5s_linear_forwards]"
					style={{
						WebkitMaskImage:
							"radial-gradient(60% 800px at top center, var(--foreground), transparent)",
						maskImage:
							"radial-gradient(60% 800px at top center, var(--foreground), transparent)",
					}}
				/>
				<TanstackDevtools
					config={{
						position: "bottom-left",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
