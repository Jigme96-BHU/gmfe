import Mongoose from "mongoose";

const flowSchema = new Mongoose.Schema(
  {
    node_name: {
      type: String,
      required: true,
    },
    TIME: {
      type: String,
      required: true,
    },
    flow_name: {
      type: String,
    },
    flow_rate: {
      type: String,
      required: true,
    },
    total_flow: {
      type: String,
      required: true,
    },
    voltage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("flow", flowSchema);
