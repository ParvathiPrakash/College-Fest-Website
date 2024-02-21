import express from "express";
// import cors from "cors";
import bodyParser from "body-parser";
import vform from "./mongo.js";
import cors from "cors"

const app = express()
app.use(cors());
const port = 8000;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())  



app.post("/VolunteerForm", async (req, res) => {
  const {name, email, domain, semester, essay} = req.body;
  const data = {
    name : name,
    email : email,
    domain : domain,
    semester : semester,
    essay : essay,
  }

  try {
    const check = await vform.findOne({
      name : name,
      email : email,
    })

    if (check) {
      res.json("Exist");
    } else {
      res.json("Does-not-Exist");
      await vform.insertMany([data]);
    }
  }
  catch(event) {
    res.json("Failed");
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
