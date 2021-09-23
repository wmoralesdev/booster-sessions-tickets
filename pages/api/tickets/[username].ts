import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import ConnectDB from '@middlewares/mongodb';

const Ticket = require('@models/Tickets/ticket.model');

const handler = nc<NextApiRequest, NextApiResponse>()
    .get(async (req, res) => {
        try {
            const { username } = req.query;
            const ticket = await Ticket.findOne({ username });

            if (!ticket) return res.status(404).json({ message: 'Ticket not found' });

            return res.status(200).json(ticket);
        } catch (error) {
            return res.status(500).json({ message: JSON.stringify(error) });
        }
    });

export default ConnectDB(handler);
