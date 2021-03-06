import MainMenu from "../models/MainMenu.js";
import SideMenu from "../models/SideMenu.js";
import Services from "../models/Services.js";
import Cleanliness from "../models/Cleanliness.js";
import Suggestions from "../models/Suggestions.js";

// GET
export const getmainMenu = (req, res) => {
  res.render("mainMenu");
};

export const getsideMenu = (req, res) => {
  res.render("sideMenu");
};

export const getcleanliness = (req, res) => {
  res.render("cleanliness");
};

export const getservices = (req, res) => {
  res.render("services");
};

export const getsuggestions = (req, res) => {
  res.render("suggestions");
};

// POST
export const postmainMenu = async (req, res) => {
  const { mainMenu_target, mainMenu_message } = req.body;
  console.log(req.body);
  try {
    const mainMenu_review = await MainMenu.create({
      mainMenuMessage: mainMenu_message,
      mainMenuTarget: mainMenu_target,
    });
    console.log(mainMenu_message);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

export const postsideMenu = async (req, res) => {
  const { sideMenu_target, sideMenu_message } = req.body;
  try {
    const sideMenu_review = await SideMenu.create({
      sideMenuTarget: sideMenu_target,
      sideMenuMessage: sideMenu_message,
    });
    console.log(sideMenu_review);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

export const postservices = async (req, res) => {
  const { services_target, services_message } = req.body;
  try {
    const services_review = await Services.create({
      servicesTarget: services_target,
      servicesMessage: services_message,
    });
    console.log(services_review);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

export const postcleanliness = async (req, res) => {
  const { cleanliness_target, cleanliness_message } = req.body;
  try {
    const cleanliness_review = await Cleanliness.create({
      cleanlinessTarget: cleanliness_target,
      cleanlinessMessage: cleanliness_message,
    });
    console.log(cleanliness_review);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

export const postsuggestions = async (req, res) => {
  const { suggestions_target, suggestions_message } = req.body;
  try {
    const suggestions_review = await Suggestions.create({
      suggestionsTarget: suggestions_target,
      suggestionsMessage: suggestions_message,
    });
    console.log(suggestions_review);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/thankYou");
};

// FUNCTION
const getmainMenuResults = async () => {
  const mainMenuFile = [];
  const mainMenuResults = await MainMenu.find({});
  mainMenuResults.forEach((each) => {
    const mainMenuReview = `${each.mainMenuTarget} === ${each.mainMenuMessage}`;
    mainMenuFile.push(mainMenuReview);
  });
  return mainMenuFile;
};

const getsideMenuResults = async () => {
  const sideMenuFile = [];
  const sideMenuResults = await SideMenu.find({});
  sideMenuResults.forEach((each) => {
    const sideMenuReview = `${each.sideMenuTarget} === ${each.sideMenuMessage}`;
    sideMenuFile.push(sideMenuReview);
  });
  return sideMenuFile;
};

const getservicesResults = async () => {
  const servicesFile = [];
  const servicesResults = await Services.find({});
  servicesResults.forEach((each) => {
    const servicesReview = `${each.servicesTarget} === ${each.servicesMessage}`;
    servicesFile.push(servicesReview);
  });
  return servicesFile;
};

const getcleanlinessResults = async () => {
  const cleanlinessFile = [];
  const cleanlinessResults = await Cleanliness.find({});
  cleanlinessResults.forEach((each) => {
    const cleanlinessReview = `${each.cleanlinessTarget} === ${each.cleanlinessMessage}`;
    cleanlinessFile.push(cleanlinessReview);
  });
  return cleanlinessFile;
};

const getsuggestionsResults = async () => {
  const suggestionsFile = [];
  const suggestionsResults = await Suggestions.find({});
  suggestionsResults.forEach((each) => {
    const suggestionsReview = `${each.suggestionsTarget} === ${each.suggestionsMessage}`;
    suggestionsFile.push(suggestionsReview);
  });
  return suggestionsFile;
};

// RESULTS
export const results = async (req, res) => {
  try {
    let mainMenuFile = await getmainMenuResults();
    let sideMenuFile = await getsideMenuResults();
    let servicesFile = await getservicesResults();
    let cleanlinessFile = await getcleanlinessResults();
    let suggestionsFile = await getsuggestionsResults();
    res.render("results", {
      mainMenuReviews: mainMenuFile,
      sideMenuReviews: sideMenuFile,
      servicesReviews: servicesFile,
      cleanlinessReviews: cleanlinessFile,
      suggestionsReviews: suggestionsFile,
    });
  } catch (e) {
    console.log(e);
  }
};
