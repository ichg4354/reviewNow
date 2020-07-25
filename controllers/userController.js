import mongoose from "mongoose";
import Ceo from "../models/Ceo.js";

export const getCeoCreate = (req, res) => {
  res.render("ceoCreate");
};

export const postCeoCreate = async (req, res) => {
  const {
    body: { nameOfBuisness, nameOfOwner, email, password1, password2 },
  } = req;
  try {
    const ceo = await Ceo.create({
      nameOfBuisness: nameOfOwner,
      nameOfOwner: nameOfOwner,
      email: email,
    });
    console.log(ceo);
  } catch (e) {
    console.log(e);
  }
  console.log(nameOfBuisness, nameOfOwner, email, password1, password2);
  res.send("post ceoCreate");
};

export const results = (req, res) => {
  res.render("results");
};
