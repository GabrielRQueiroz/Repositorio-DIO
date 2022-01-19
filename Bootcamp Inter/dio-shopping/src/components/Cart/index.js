import React, { useState } from 'react';
import { Badge, Button, Modal, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from '../Store/actions/cart';

const Cart = () => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleHide = () => setShow(false);

	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	let totalPrice = 0;

	for (let i = 0; i < cart.Cart.length; i++) {
		totalPrice += cart.Cart[i].price * cart.Cart[i].quantity;
	}

	if (cart.value > 0) {
		localStorage.setItem('dioshopping: cart', JSON.stringify(cart));
	}

	return (
		<>
			<Button
				onClick={handleShow}
				className='my-auto mx-2'
				variant='warning'
				data-bs-toggle='modal'
				data-bs-target='#CartModal'
			>
				<span>
					<i className='fas fa-shopping-cart'></i>
				</span>
				<Badge bg='warning' pill className=' text-dark'>
					{cart.value}
				</Badge>
			</Button>

			{/* Modal */}
			<Modal
				centered
				className='position-absolute'
				show={show}
				onHide={handleHide}
				dialogClassName='modal-90w'
				aria-labelledby='CartModalLabel'
			>
				<Modal.Header className='pe-4' closeButton>
					<Modal.Title id='CartModalLabel'>Meu Carrinho</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Table responsive hover>
						<thead>
							<tr>
								<th scope='col'></th>
								<th scope='col'>Produto</th>
								<th scope='col'>Qtd</th>
								<th scope='col'>Preço</th>
								<th scope='col'></th>
								<th scope='col'></th>
								<th scope='col'>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.Cart.map((item) => {
								return (
									<tr className='align-middle' key={item.id}>
										<th>
											<Button
												onClick={() => dispatch(cartActions.DeleteItem(cart, item))}
												variant='outline-danger'
												size='sm'
											>
												<i className='fas fa-window-close'></i>
											</Button>
										</th>
										<th>
											<img
												className='img-fluid img-thumbnail'
												src={item.image}
												alt={item.Name}
												width='50px'
											/>
										</th>
										<th>
											<span className='badge badge-pill bg-warning'>
												{item.quantity}
											</span>
										</th>
										<th>R$ {item.price.toFixed(2)}</th>
										<th>
											<Button
												onClick={() => dispatch(cartActions.AddItem(cart, item))}
												variant='primary'
												size='sm'
											>
												<i className='fas fa-plus'></i>
											</Button>
										</th>
										<th>
											<Button
												onClick={() => dispatch(cartActions.RemoveItem(cart, item))}
												variant='danger'
												size='sm'
											>
												<i className='fas fa-minus'></i>
											</Button>
										</th>
										<th>R$ {(item.price * item.quantity).toFixed(2)}</th>
									</tr>
								);
							})}
							<tr>
								<th colSpan='2' scope='col'>
									Total
								</th>
								<th colSpan='3'>{cart.value} itens</th>
								<th colSpan='2'>R$ {totalPrice.toFixed(2)}</th>
							</tr>
						</tbody>
					</Table>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={handleHide} variant='outline-danger' data-bs-dismiss='modal'>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Cart;
