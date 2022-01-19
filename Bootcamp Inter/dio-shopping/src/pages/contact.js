import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';

const Contatos = () => {
	const url = 'http://localhost:5000/message';
	const [messages, setMessages] = useState([]);
	const [author, setAuthor] = useState('');
	const [content, setContent] = useState('');
	const [render, setRender] = useState(false);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		// const response = await fetch(url);
		// const data = await response.json();

		const getUsersMessages = async () => {
			let allMessages = [];
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					for (let i = 0; i < data.length; i++) {
						allMessages.push(data[i]);
					}
					setMessages(allMessages);
				});
		};

		getUsersMessages();
	}, [render]);

	const sendMessage = () => {
		const bodyForm = {
			email: author,
			message: content,
		};

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyForm),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					setRender(true);
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 5000);
				}
			});

		setAuthor('');
		setContent('');
	};

	return (
		<Container
			className='top-0 absolute d-flex flex-column justify-content-between'
			style={{
				paddingTop: '6rem',
				height: '100vh',
			}}
		>
			<Card>
				<Card.Body>
					<Form>
						<Form.Group className='mb-3' controlId='formMail'>
							<Form.Label>E-mail</Form.Label>
							<Form.Control
								required
								type='text'
								placeholder='Enter your email'
								onChange={(event) => {
									setAuthor(event.target.value);
								}}
							/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formMessage'>
							<Form.Label>Message</Form.Label>
							<Form.Control
								required
								type='text'
								placeholder='Message'
								onChange={(event) => {
									setContent(event.target.value);
								}}
							/>
						</Form.Group>
						<Button
							onClick={sendMessage}
							className='w-100 mb-3'
							type=''
							variant='outline-warning'
						>
							Enviar
						</Button>
					</Form>

					{success && (
						<Alert variant='success' dismissible>
							<Alert.Heading>Sucesso!</Alert.Heading>
							<strong>Mensagem enviada e registrada com sucesso!</strong>
						</Alert>
					)}

					<hr />

					{messages.map((message) => (
						<Card className='mt-2 px-3' key={message.id}>
							<Card.Body>
								<Card.Title as='h5'>{message.email}</Card.Title>
								<Card.Text>{message.message}</Card.Text>
								<Card.Text className='text-muted d-flex justify-content-between'>
									<span>
										{message.created_at.slice(8, 10)}/{message.created_at.slice(5, 7)}/
										{message.created_at.slice(0, 4)}
									</span>
									<span>{message.created_at.slice(11, 16)}</span>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Contatos;
