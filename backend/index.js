const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const userRouter = require("./routes/User");
const bookRouter = require("./routes/Book");
const bookshelfRouter = require("./routes/Bookshelves");

app.use(express.json());
app.use(cors());

// routes
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/bookshelf", bookshelfRouter);




db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});

