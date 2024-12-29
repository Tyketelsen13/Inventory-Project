function InventoryItem (/* TODO: Take the props. Set defaults to the quantity. */)
{
	const lowStockThreshold = 5;
	const highValueThreshold = 500;
	const totalValue = price * quantity;
	return (
		<div>
			<h2>{name} ({type})</h2>
			{
				quantity < lowStockThreshold
                    &&
			<message>
				<p><span>⚠️</span> Stock is low! {quantity} remained.</p>
			</message>
			}
			{
				totalValue > highValueThreshold
                    &&
					<message>
						<p><span>💰</span> High value - consider extra protection!</p>
					</message>
			}
		</div>
	);
}
