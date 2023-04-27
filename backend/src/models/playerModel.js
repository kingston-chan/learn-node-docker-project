import { Schema, model } from "mongoose";

export const PlayerSchema = new Schema({
    name : String,
    position : String,
    age : Number,
    team : String,
    assists : Number,
    blocks : Number,
    points : Number
}, {
    timestamps: true
});

export const PlayerModel = model("PlayerModel", PlayerSchema);
