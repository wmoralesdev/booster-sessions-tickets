import mongoose from 'mongoose';

const Ticket = new mongoose.Schema({
    username: String,
    name: String,
    image: String,
    style: Number,
    topic: String,
    date: Date,
    host: String,
});

module.exports = mongoose.models.Ticket || mongoose.model('Ticket', Ticket);
