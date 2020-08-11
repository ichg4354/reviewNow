import MainMenu from "../models/MainMenu.js";
export const getmainMenu = (req, res) => {
  res.render("mainMenu");
};

export const postmainMenu = async (req, res) => {
  const { mainMenu_target, mainMenu_message } = req.body;
  try {
    const mainMenu_review = await MainMenu.create({
      mainMenuTarget: mainMenu_target,
      mainMenuMessage: mainMenu_message,
    });
    console.log(mainMenu_review);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

export const results = async (req, res) => {
  const resultFile = [];
  try {
    const results = await MainMenu.find({});
    results.forEach((each) => {
      const Review = `${each.mainMenuTarget} === ${each.mainMenuMessage}`;
      resultFile.push(Review);
      return;
    });
    res.render("results", { Reviews: resultFile });
  } catch (e) {
    console.log(e);
  }
};
