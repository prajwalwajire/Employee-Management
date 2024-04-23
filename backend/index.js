const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const PORT = 4001;
console.log("ddf");
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/employee", employeeRoutes);
app.use("/category", categoryRoutes);

mongoose.connect(
  "mongodb+srv://prajwalwajire1972:prajw123@freshfromfarm.f2zhgis.mongodb.net/?retryWrites=true&w=majority&appName=freshfromfarm"
).then(()=>{
  console.log("MongoDB connected");
}
  
).catch((error)=>{
console.log(error)
});

app.listen(PORT, () => {
  console.log(`Server is connected and running on port ${PORT}`);
});

