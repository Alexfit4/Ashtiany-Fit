import { React, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Contact() {
	const [clients, setClients] = useState({});

	const onChange = (e) => {
		const { name, value } = e.target;
		setClients({
			...clients,
			[name]: value,
		});
	};

	const onSumbit = () => {
		axios
			.post("http://localhost:5000/clients", {
				firstName: clients.first,
				lastName: clients.last,
				email: clients.email,
			})
			.then((res) => {})
			.catch((error) => {});
	};

	return (
		<div>
			<Form onSubmit={onSumbit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={onChange}
						name="email"
						type="email"
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="first"
						onChange={onChange}
						placeholder="First name"
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="last"
						onChange={onChange}
						placeholder="Last name"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
