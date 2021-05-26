import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    firstName: String,
	lastName: String,
	email: String,
});

const ClientSchema = mongoose.model('ClientSchema', clientSchema)

export default ClientSchema
