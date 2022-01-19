import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductCard from '../components/Card';
import useWindowResize from '../hooks/useWindowResize';

const HomePage = () => {
	const products = useSelector((state) => state.products);
	const windowWidth = useWindowResize();

	const categories = products.map((category) => {
		const container = {};
		container['id'] = category.id_categorys;
		container['name'] = category.name_categorys;
		return container;
	});

	const category = categories
		.map(JSON.stringify)
		.filter(function (item, index, arr) {
			return arr.indexOf(item, index + 1) === -1;
		})
		.map(JSON.parse);

	const arrayCategory = categories.map((category) => category.name);
	let count = {};

	for (let i = 0; i < arrayCategory.length; i++) {
		let key = arrayCategory[i];
		count[key] = count[key] ? count[key] + 1 : 1;
	}

	const DesktopCategories = () => (
		<Col md={4} sm={5}>
			<Card bg='light' text='dark' className='mb-2'>
				<Card.Header as='h4'>Categorias</Card.Header>
				<Card.Body>
					{category.map((category) => {
						return (
							<Card.Text key={category.id}>
								<Card.Title as='strong'>{category.name}:</Card.Title> {count[category.name]}
							</Card.Text>
						);
					})}
				</Card.Body>
			</Card>
		</Col>
	);

	const MobileCategories = () => (
		<Col className='mb-4' xs={12}>
			<Accordion defaultActiveKey='1'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header as='h4'>Categorias</Accordion.Header>
					<Accordion.Body>
						<Card.Body>
							{category.map((category) => {
								return (
									<Card.Text key={category.id}>
										<Card.Title as='strong'>{category.name}:</Card.Title>{' '}
										{count[category.name]}
									</Card.Text>
								);
							})}
						</Card.Body>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Col>
	);

	return (
		<Row style={{ marginTop: '6rem' }}>
			{windowWidth >= 576 ? <DesktopCategories /> : <MobileCategories />}

			<Col md={8} sm={7} xs={12}>
				<Row xl={4} lg={3} md={2} xs={1} className='g-4'>
					{products.map((item) => (
						<Col>
							<ProductCard key={item.id_product} product={item}>
								{item.name_product}
							</ProductCard>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default HomePage;
