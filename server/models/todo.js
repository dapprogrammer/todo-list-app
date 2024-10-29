/*



import { Schema, model } from "mongoose";

const OwnerSchema = new Schema({

    Owner: {
        type: Schema.Types.ObjectId,   
        ref: 'User',
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
});

const Todos = model("Owner", OwnerSchema);

export default Todos;


*/