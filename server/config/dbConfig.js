const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://itsmeshaikasifali:12006051@cluster0.2vpfnb9.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Not Connected !!!", err));
