import { Modal } from "~/components/modal";

const CopiedModal = () => {
	return (
		<Modal>
			<div className="text-[#3e2e1b]">
				<h2 className="text-lg font-bold mb-4">Recipe copied to clipboard</h2>
			</div>
		</Modal>
	);
};

export default CopiedModal;
