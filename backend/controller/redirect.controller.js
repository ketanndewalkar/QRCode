const { Count } = require("../model/Brand");
const { url, keywords } = require("../url");
const redirectController = async (req, res) => {
  try {
    const {brand} = req.query;
    console.log(brand);
    const doc = await Count.find({ name:brand });
    if (!keywords.includes(brand) || doc.length==0){
        res.send("The url dont exist");
        return ;
    }
    await Count.updateOne({ name: brand }, { $inc: { count: 1 } });
    res.redirect(url[keywords.indexOf(brand)]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = redirectController;
