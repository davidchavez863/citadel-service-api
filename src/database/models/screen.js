import mongoose from "mongoose";

const ScreenSchema = new mongoose.Schema({
    name: String,
    searchToken: String,
    deviceModel: String,
    remoteName: String,
    systemUUID: String,
    created: { type: Date, default: Date.now },
    lastPing: { type: Date, default: Date.now },
    pin: String,
    ip: String,
    limits: [{
        type: { type: String },
        value: mongoose.Schema.Types.Mixed
    }],
    config: [{
        type: { type: String },
        value: mongoose.Schema.Types.Mixed
    }],
    issues: [{
        when: Date,
        message: String,
        type: {
            type: String,
            enum: ['notplaying']
        }
    }],
    screenIssueClearDate: Date,
    location: {
        history: [{
            when: Date,
            latitude: Number,
            longitude: Number,
            summary: String,
        }],
        valid: Boolean,
        lastUpdate: Date
    },
    version: String,
    notes: String,
    status: {
        type: String,
        enum: ['pending', 'offline', 'online','paused', 'n/a']
    },
    type: {
        type: String,
        enum: ['user', 'system']
    },
    lastCacheTime: Number,
    channels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'channel' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
    usersWithAccess: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    deleted: Date,
});

export default (connection) => connection.model("screen", ScreenSchema);