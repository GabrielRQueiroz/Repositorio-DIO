import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from './Store/actions/cart';

const ProductCard = ({ product, children }) => {
	const cart = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();

	const handleDispatch = () => dispatch(cartActions.Add(cart, product));

	return (
		<Card className='text-center'>
			<Card.Img variant='top' src={product.image} alt={product.name_product} />
			<Card.Body>
				<Card.Title>{children}</Card.Title>
				<Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
				<Button variant='warning' onClick={handleDispatch}>
					Adicionar
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
