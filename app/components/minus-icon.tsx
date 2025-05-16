import type React from "react";

export const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		className="feather feather-minus"
		role="img"
		aria-label="Minus"
		{...props}
	>
		<path d="M5 12h14" />
	</svg>
);
