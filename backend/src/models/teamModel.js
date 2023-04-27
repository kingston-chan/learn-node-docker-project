import { Schema, model } from "mongoose";

export const TeamSchema = new Schema({
  name : String,
  wins : Number,
  losses : Number,
  offensiveRating : Number,
  defensiveRating : Number,
  Arena : String,
  totalAttendance : Number,
  code : String
}, {
    timestamps: true
});

export const TeamModel = model(TeamModel, TeamSchema);
