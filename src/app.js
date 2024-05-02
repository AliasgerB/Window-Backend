const express = require("express");
const app = express();
require("./db/connection");
const cors = require("cors");

const Window = require("./model/window");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Path
const port = process.env.PORT || 8000;
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const windows = await Window.find();
    res.status(200).json(windows);
  } catch (e) {
    console.error("Error fetching data:", e);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/window", async (req, res) => {
  try {
    const windowType = req.body?.Windowtype;
    // console.log(windowType);
    if (!windowType) {
      return res
        .status(400)
        .json({ error: "Window type is missing in the request body" });
    }

    let windowToUpdate = await Window.findOne({ Windowtype: windowType });

    if (windowToUpdate) {
      windowToUpdate.Count += 1;
      windowToUpdate.Content = req.body.Content;

      await windowToUpdate.save();
      return res.json(windowToUpdate);
    } else {
      const newWindow = new Window(req.body);
      await newWindow.save();
      return res.json(newWindow);
    }
  } catch (error) {
    console.error("Error updating/creating window:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Server Create
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
