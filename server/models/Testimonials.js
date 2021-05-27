import mongoose from "mongoose";
const { Schema } = mongoose;


const testimonialSchema = mongoose.Schema({
    review:{
        type: Schema.Types.ObjectId,
        ref: "ClientSchema",
    },
});

const TestimonialSchema = mongoose.model('TestimonialSchema', testimonialSchema)

export default TestimonialSchema