import Listing from "../models/Listing.js";

export const createListing = async (req, res, next) => {
    const newListing = new Listing(req.body);

    try {
        const savedListing = await newListing.save();
        res.status(200).json(savedListing);
    } catch (err) {
        next(err)
    }
}

export const updateListing = async (req, res, next) => {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedListing);
    } catch (err) {
        next(err)
    }
}

export const deleteListing = async (req, res, next) => {
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json("Listing has been deleted");
    } catch (err) {
        next(err)
    }
}

export const getListing = async (req, res, next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        res.status(200).json(listing);
    } catch (err) {
        next(err)
    }
}

export const getAllListing = async (req, res, next) => {
    try {
        const {limit, featured, ...others}= req.query;
        const listings = await Listing.find(others).limit(limit);
        res.status(200).json(listings);
    } catch (err) {
        next(err);
    }
}