require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;
const HoldingModel  = require("./model/HoldingModel");
const PositionsModel  = require("./model/PositionsModel");
const OrdersModel=require("./model/OrdersModel");
const UserModel=require("./model/UserModel");
const bodyParser=require("body-parser")
const cors=require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
app.listen(PORT, () => {
  console.log("App started");
  mongoose.connect(url);
  console.log("DBconnected");
});
// Validate critical envs early
const JWT_SECRET = process.env.JWT_SECRET_KEY;
if (!JWT_SECRET) {
  console.error("JWT_SECRET_KEY is not set. JWT operations will fail until it's configured.");
}
// Configure allowed origins. Can be overridden with environment variable ALLOWED_ORIGINS
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((s) => s.trim())
  : [
      "http://localhost:5173",
      "https://tradex-dashboard-b8rv.onrender.com",
      "https://tradex-dashboard-b8rv.onrender.com/",
      "https://tradexapp.netlify.app",
      "https://tradexapp.netlify.app/",
      // Add the frontend origin observed in the CORS error
      "https://tradex-frontendd.onrender.com",
    ];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin like mobile apps or curl
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf("*") !== -1 || allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(new Error("CORS policy: Origin not allowed"), false);
    },
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
    credentials: false,
  })
);

// Make sure preflight requests are handled
app.options("*", cors());
app.use(bodyParser.json());
// Attach userId from JWT if Authorization: Bearer <token> is provided
function attachUserFromAuthHeader(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      if (!JWT_SECRET) {
        // Skip verification if secret is missing; user remains unauthenticated
      } else {
        const payload = jwt.verify(token, JWT_SECRET);
        if (payload && payload.id) {
          req.userId = payload.id;
        }
      }
    } catch (e) {}
  }
  next();
}
app.use(attachUserFromAuthHeader);
// Health endpoint to quickly check configuration
app.get("/health", (req, res) => {
  res.json({
    ok: true,
    env: {
      hasMongoUrl: !!process.env.MONGO_URL,
      hasJwtSecret: !!JWT_SECRET,
    },
  });
});
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done");
// });
// app.get("/addPositions",async(req,res)=>{
//     let tempPositions=[
//          {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ]
//     tempPositions.forEach((item)=>{
//         let newPosition=new PositionsModel({
//                 name: item.name,
//                 qty: item.qty,
//                 avg: item.avg,
//                 price: item.price,
//                 net: item.net,
//                 day: item.day,
//                 isLoss:item.isLoss,
//         })
//         newPosition.save();
//     });
//     res.send("Done");
// })
app.get("/allHoldings",async(req,res)=>{
    try {
      let allHoldings = await HoldingModel.find({});
      if (!allHoldings || allHoldings.length === 0) {
        const samples = [
          { name: "INFY", qty: 2, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
          { name: "HDFCBANK", qty: 1, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
          { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
          { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
        ];
        await HoldingModel.insertMany(samples);
        allHoldings = await HoldingModel.find({});
      }
      res.json(allHoldings);
    } catch (e) {
      res.status(500).send("Server error");
    }
})
app.post("/seedHoldings", async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: token required" });
    }
    const existing = await HoldingModel.findOne({ userId: req.userId });
    if (existing) {
      return res.status(400).json({ message: "Holdings already exist for this user" });
    }
    const samples = [
      { name: "INFY", qty: 2, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
      { name: "HDFCBANK", qty: 1, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
    ].map(h => ({ ...h, userId: req.userId }));
    await HoldingModel.insertMany(samples);
    res.json({ message: "Seeded holdings for user" });
  } catch (e) {
    res.status(500).json({ message: "Failed to seed holdings" });
  }
})
app.get("/allPositions",async(req,res)=>{
    try {
      let allPositions=await PositionsModel.find({});
      if (!allPositions || allPositions.length === 0) {
        const samples = [
          { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: false },
          { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%", isLoss: false },
        ];
        await PositionsModel.insertMany(samples);
        allPositions = await PositionsModel.find({});
      }
      res.json(allPositions);
    } catch (e) {
      res.status(500).send("Server error");
    }
})
app.post("/newOrder",async(req,res)=>{
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: token required" });
    }
    let newOrder=new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode:req.body.mode,
      userId: req.userId,
    });
    await newOrder.save();
    res.send("order saved");

})
app.get("/allOrders",async(req,res)=>{
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: token required" });
    }
    const filter = { userId: req.userId };
    let allOrders=await OrdersModel.find(filter);
    res.json(allOrders)
})
app.delete("/order/:id", async (req, res) => {
  if (!req.userId) {
    return res.status(401).json({ message: "Unauthorized: token required" });
  }
  const id = req.params.id;
  const doc = await OrdersModel.findById(id);
  if (!doc) return res.status(404).json({ message: "Order not found" });
  if (doc.userId && String(doc.userId) !== String(req.userId)) {
    return res.status(403).json({ message: "Forbidden" });
  }
  await OrdersModel.deleteOne({ _id: id });
  res.json({ message: "Order deleted" });
})
app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    // Check if user exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save new user
    const newUser = new UserModel({
      username,
      password: hashedPassword,
      email,
    });
    await newUser.save();

    // Create JWT
    if (!JWT_SECRET) {
      return res.status(500).json({ message: "Server misconfigured: JWT secret missing" });
    }
    const token = jwt.sign(
      { id: newUser._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, userId: newUser._id, username: newUser.username, email: newUser.email });
  } catch (err) {
    console.error("Error during signup : ", err.message);
    res.status(500).send("Server error");
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create JWT
    if (!JWT_SECRET) {
      return res.status(500).json({ message: "Server misconfigured: JWT secret missing" });
    }
    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, userId: user._id, email: user.email, username: user.username });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).send("Server error");
  }
});
