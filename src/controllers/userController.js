import mongoose from "mongoose";
import Ceo from "../models/Ceo.js";
import routes from "../routes.js";

export const getCeoCreate = (req, res) => {
  res.render("ceoCreate");
};

export const postCeoCreate = async (req, res) => {
  const {
    body: { nameOfBuisness, nameOfOwner, email, password1, password2 },
  } = req;
  if (password1 != password2) {
    res.status(400);
    res.redirect(routes.CEOCREATE);
  }
  try {
    const ceo = await Ceo.create({
      nameOfBuisness: nameOfOwner,
      nameOfOwner: nameOfOwner,
      email: email,
    });
    const ceoId = ceo._id;
  } catch (e) {
    console.log(e);
  } finally {
    res.redirect(routes.MAIN);
  }
};

export const results = (req, res) => {
  res.render("results");
};
