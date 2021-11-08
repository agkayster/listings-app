const ActiveRadioButton = ({ handleItem, handleCheckBox, handleOnChecked }) => {
	return (
		<>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					value='active'
					name={`flexRadio${handleItem.id}`}
					id='listingRadio'
					checked={
						handleOnChecked[`flexRadio${handleItem.id}`] ===
						'active'
					}
					onChange={handleCheckBox}
				/>
				<label className='form-check-label' htmlFor='listingRadio'>
					Active
				</label>
			</div>
		</>
	);
};

export default ActiveRadioButton;
