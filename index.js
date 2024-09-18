import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use("/users", (req, res) => {
  const users = [
    { name: "Himanshu", age: 21 },
    { name: "Rahul", age: 25 },
    { name: "Anjali", age: 28 },
    { name: "Sneha", age: 22 },
    { name: "Aman", age: 30 },
    { name: "Neha", age: 27 },
    { name: "Priya", age: 24 },
    { name: "Rohan", age: 29 },
    { name: "Kavya", age: 26 },
    { name: "Vikas", age: 31 },
    { name: "Meera", age: 23 },
  ];

  return res.status(200).json({
    users,
    message: "Ok",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
