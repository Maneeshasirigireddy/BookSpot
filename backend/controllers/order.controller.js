require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const expressAsyncHandler = require("express-async-handler");

const db = require("../models/index");

exports.addOrder = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  let response = await db.order.create(req.body);
  // console.log(response);
  res.send({ message: "Added To Order", payload: response.dataValues });
});
// create payment session
exports.createPaymentSession = expressAsyncHandler(async (req, res) => {
  try {
    let price = req.params.price;

    //insert into payment table
    let paymentDeatils = await db.payment.create({
   
      totalAmount: price,
      paymentType: "card",
    });
    // console.log(paymentDeatils);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "INR",
            unit_amount: paymentDeatils.dataValues.totalAmount * 100,
            product_data: {
              name: "Payment bill",
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/user/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      //  `http://localhost:5000/order/successfullPayment/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/user`,
      metadata: {
        paymentId: paymentDeatils.id,
        totalAmount: paymentDeatils.totalAmount,
        bookId:req.params.bookId,
        bookType:req.params.bookType
      },
    });
    res.send(session.url);
  } catch (err) {
    // console.log(err);
    res.send({ err: err.message });
  }
});
// after successfullPayment
exports.successfullPayment = expressAsyncHandler(async (req, res) => {
  let session_id = req.params.session_id;
  // console.log(session_id);
  let sessionObj = await stripe.checkout.sessions.retrieve(session_id);
  // console.log(sessionObj.payment_status);
  if (sessionObj.payment_status == "paid") {
    // console.log("session Obj", sessionObj.metadata.bill_id);
    // await db.payment.update(
    //   {
    //     status: true,
    //   },
    //   {
    //     where: {
    //       id: Number(sessionObj.metadata.paymentId),
    //     },
    //   }
    // );
    let body={}
    body.userId=req.params.userId,
    body.bookId=sessionObj.metadata.bookId,
    body.bookType=sessionObj.metadata.bookType,
    body.paymentId=sessionObj.metadata.paymentId,
    body.deliveryAddress=""
    await db.order.create(body)
  //  console.log(body)
    res.send({ message: "updated" });
  }
});

// get the successfull orders
exports.successfullOrders=expressAsyncHandler(async(req,res)=>{
  let orders=await db.order.findAll({where:{userId:req.params.userId},
    
  })
 
  orders=orders.map(order=>order.dataValues)
  console.log(orders)
  
  let books=[]
  for(let book of orders){
    let res=await db.Book.findOne({where:{id:book.bookId}})
    books.push(res.dataValues)
  }

  console.log("books",books)
  res.send({message:"Order Details",books:books,orders:orders})

})