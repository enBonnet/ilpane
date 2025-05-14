import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router";

export const Modal = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const navigate = useNavigate();

	const handleClose = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleClose]);

	return (
		<div className="fixed w-full h-full z-20 flex items-center justify-center">
			<div
				className="absolute w-full h-full flex items-center justify-center bg-gray-800 opacity-50"
				onClick={() => handleClose()}
				onKeyDown={() => handleClose()}
			/>
			<div className="bg-gradient-to-br from-[#f5e8d3] via-[#f4d9b5] to-[#f2c88d] rounded-lg p-4 shadow-lg z-30 text-black overflow-y-auto max-h-[calc(100vh-4rem)]">
				<div className="mb-2">{children}</div>
			</div>
		</div>
	);
};
