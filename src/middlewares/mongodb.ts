import mongoose, { ConnectOptions } from 'mongoose';

const ConnectDB = (handler: any) => async (req: any, res: any) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }

    await mongoose.connect(process.env.mongo_uri as string, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
    } as ConnectOptions);

    return handler(req, res);
};

export default ConnectDB;
