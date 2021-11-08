import ActiveRadioButton from './ActiveRadioButton';
import ExpiredRadioButton from './ExpiredRadioButton';

const ListingsCard = ({ onItem, onHandleCheckBox, onIsChecked }) => {
	return (
		<>
			<div className='col'>
				<div className='card mb-3' style={{ maxWidth: '540px' }}>
					<div className='row g-0'>
						<div className='col-md-4'>
							<img
								src={onItem.image}
								className='img-fluid rounded-start h-100 w-125'
								alt='apartment'
							/>
						</div>
						<div className='col-md-8'>
							<div className='card-body'>
								<div className='quote price fw-bold'>
									Asking Price
									<h5 className='card-title'>
										£ {onItem.asking_price}
									</h5>
								</div>
								<p className='card-text'>{`${onItem.no_of_bedrooms} bedrooms for sale`}</p>
								<p className='card-text'>
									<span className='fw-bold'>Address </span>:{' '}
									{onItem.address}
								</p>
								<p className='card-text'>
									<span className='fw-bold'> Postcode</span>:{' '}
									{onItem.postcode}
								</p>
								<p className='card-text'>{onItem.desc}</p>
								<div className='flex'>
									<ActiveRadioButton
										handleItem={onItem}
										handleCheckBox={onHandleCheckBox}
										handleOnChecked={onIsChecked}
									/>
									<ExpiredRadioButton
										handleItem={onItem}
										handleCheckBox={onHandleCheckBox}
										handleOnChecked={onIsChecked}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListingsCard;
