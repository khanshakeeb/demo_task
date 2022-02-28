import mongoose from 'mongoose';

const {Schema} = mongoose;

const recordSchema = Schema({
    key: { type: String },
    values: { type: String },
    createdAt: { type: Date },
    counts: { type: Array }
});

export default mongoose.model('records', recordSchema);