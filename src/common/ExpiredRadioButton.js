const ExpiredRadioButton = ({
	handleItem,
	handleCheckBox,
	handleOnChecked,
}) => {
	return (
		<>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					value='expired'
					name={`flexRadio${handleItem.id}`}
					id='listingRadio2'
					checked={
						handleOnChecked[`flexRadio${handleItem.id}`] ===
						'expired'
					}
					onChange={handleCheckBox}
				/>
				<label className='form-check-label' htmlFor='listingRadio2'>
					Expired
				</label>
			</div>
		</>
	);
};

export default ExpiredRadioButton;
