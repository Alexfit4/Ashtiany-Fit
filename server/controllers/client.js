import ClientSchema from "../models/Clients.js";

export const getPosts = async (req, res) => {
	try {
		const postClient = await ClientSchema.find();

		console.log(postClient);

		res.status(200).json(postClient);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const { firstName, lastName, email } = req.body;

	try {
		const newClient = await ClientSchema.create({
			firstName,
			lastName,
			email,
		});

		return res.status(200).json(newClient);
	} catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
	}
};
