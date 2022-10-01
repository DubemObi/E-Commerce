const Order = require("../models/orderModel");
const User = require("../models/userModel");



    // CREATE ORDER
const createOrder = ( async (req, res) => {
         //const userId = request.params.id;
            const newOrder = new Order(req.body);
        
            try {
              const savedOrder = await newOrder.save();
              res.status(200).json({
                message: "Order created Successfully!",
                return : savedOrder});
        
            } catch (err) {
              res.status(500).json(err);
            }
          });


//     try {
//         const { userId } = req.body
//         const order = await Order.create({ userId})

//         res.status(200).json({
//             status: 'success',
//             data: {order}
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// }


//         const userId = req.params.id;
//         const user = await User.findById(userId); 
    
//         if (!user) {
//           return res
//             .status(401)
//             .json({ success: false, message: "Unauthorized user : CANNOT PLACE AN ORDER!" });

//         }

//     const newOrder = new Order(req.body);
//     const savedOrder = await newOrder.save();
//       res.status(200).json({
//         message: "Order created Successfully!",
//         return : savedOrder});

//     } catch (err) {
//       res.status(500).json(err);
//     }
//  }



 //UPDATE ORDER
 exports.updateOrder = async (request, response) => {
    try {
      const { id } = request.query;
      const findOrder = await Order.findById(id);
      findOrder.quantity = request.body.quantity;
      await findOrder.save();
      return response.status(200).send({
        status: true,
        message: "Order has been updated successfully",
        updatedUser: findOrder,
      });
    } catch (err) {
      return response.status(401).send({ error });
    }
  };

//  const updateOrder = async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.id)
//         if (!order) {
//             return res.status(400).json({
//                 status: 'fail',
//                 message: `There is no Order with Id ${req.params.id}`
//             })
//         }
//     }}


 //DELETE ORDER
 const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) {
            return res.status(400).json({
                status: 'fail',
                message: `Order with Id: ${req.params.id} does not exist!`
            })
        }

        await Order.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'Order deleted successfully'
        })
    } 
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}


// GET A USERS ORDER
const getUserOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json({
            data: order
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

 //GET ALL ORDERS
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
    };

 module.exports = {createOrder , getAllOrders, getUserOrder, deleteOrder}