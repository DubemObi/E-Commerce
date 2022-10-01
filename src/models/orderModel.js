const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    Userid : {
        userId: { type: String, required: [true, "input a valid userId"] },
    // Required :  mongoose.schema.ObjectId,
     //Ref : "User"
     },

    products: [
      {
        productId: {
          productId: {
            userId: { type: String, required: true },
            //type: mongoose.Schema.Types.ObjectId,
            //ref: "Product",
        },

        quantity: {
          type: Number,
          default: 1,
        },
      },
    },
    ],

    price: { type: Number,
      required: true },

    totalAmount: {
              type: Number,
              required: true},

    address: { type: Object,
               required: true },

    status: { type: String, 
              default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);