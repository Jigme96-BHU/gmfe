import Mongoose from "mongoose";

const valveSchema = new Mongoose.Schema(
  {
    node_name: {
      type: String,
      required: true,
    },
    valve_name: {
      type: String,
    },
    valve_percentage: {
      type: String,
      required: true,
    },
    valve_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default Mongoose.model("valve", valveSchema);
