const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/cartoonAvatar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  options: {
    topType: String,
    accessoriesType: String,
    hairColor: String,
    facialHairType: String,
    clotheType: String,
    clotheColor: String,
    eyeType: String,
    eyebrowType: String,
    mouthType: String,
    skinColor: String,
  },
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post("/api/createAvatar", async (req, res) => {
  const { username, options } = req.body;

  try {
    const user = new User({ username, options });
    await user.save();
    res.status(201).json({ message: "Avatar created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.put("/api/edit-avatar", async (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      topType: req.body.topType,
      accessoriesType: req.body.accessoriesType,
      hairColor: req.body.hairColor,
      facialHairType: req.body.facialHairType,
      clotheType: req.body.clotheType,
      clotheColor: req.body.clotheColor,
      eyeType: req.body.eyeType,
      eyebrowType: req.body.eyebrowType,
      mouthType: req.body.mouthType,
      skinColor: req.body.skinColor,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
