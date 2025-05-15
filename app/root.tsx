import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

const modalRoutes = ["/ingredients"];

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const isModalOpen = modalRoutes.includes(location.pathname);

	return (
		<html lang="en" className="bg-[#d09e60]">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no"
				/>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍞</text></svg>"
				/>
				<Meta />
				<Links />
			</head>
			<body className={isModalOpen ? "overflow-hidden" : ""}>
				<div className="relative min-h-screen bg-gradient-to-br from-[#f5e8d3] via-[#f4d9b5] to-[#f2c88d] overflow-hidden">
					<div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#d09e60] rounded-full blur-[120px] opacity-40 z-0" />
					<div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#f7c797] rounded-full blur-[100px] opacity-30 z-0" />
					{children}{" "}
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
