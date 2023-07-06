const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/FoodVilla";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, res) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected");
        const fetched_data = await mongoose.connection.db.collection("Foods");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "FoodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory=catData;
            }
          });
          // if(err) console.log(err);
          // global.food_items=data;
        });
      }
    }
  );
};

module.exports = mongoDB;
