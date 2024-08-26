const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Cấu hình thư mục tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Cấu hình route chính
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
