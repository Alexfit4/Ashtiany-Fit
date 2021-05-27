import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	review: {
		type: String
	}
});

const ClientSchema = mongoose.model('ClientSchema', clientSchema)

export default ClientSchema
