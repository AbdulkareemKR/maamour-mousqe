// mysql://bbb32223c9ea97:303c0a01@us-cdbr-east-04.cleardb.com/heroku_35584d16ac6b3a9?reconnect=true
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

/////////////////////////// Routers ////////////////////////////////////////////
const programRouter = require("./routes/Programs");
app.use("/programs", programRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const userRouter = require("./routes/Users");
app.use("/auth", userRouter);
//////////////////////////////////////////////////////////////////////

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });
});

//heroku git:remote -a yourApp
