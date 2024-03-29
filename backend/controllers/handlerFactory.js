import APIFeatures from "../utils/apiFeatures.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { filterObj } from "../utils/filterObj.js";

export const createOne = (Model, moreLogic) =>
  catchAsync(async (req, res, next) => {
    let newDoc = await Model.create(req.body);

    if (moreLogic) {
      newDoc = moreLogic(newDoc);
    }

    res.status(201).json({
      status: "success",
      data: {
        newDoc,
      },
    });
  });

export const createMany = (Model, moreLogic) =>
  catchAsync(async (req, res, next) => {
    let newDocs = await Model.insertMany(req.body);

    if (moreLogic) {
      newDocs = moreLogic(newDocs);
    }

    res.status(201).json({
      status: "success",
      data: {
        newDoc: newDocs,
      },
    });
  });

export const count = (Model, searchBy) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    if (req.customFilter) filter = req.customFilter;

    // build the query
    const features = new APIFeatures(
      Model.countDocuments(filter),
      // Model.find({}),
      req.query,
      true
    )
      .filter()
      .search(searchBy);
    // .sort()
    // .limitFields()
    // .pagination()
    // execute the query

    const count = await features.query; //.explain();
    // const count = await Model.countDocuments({
    //   type: "topDeals",
    // });
    // send the response
    res.status(200).json({
      status: "success",
      data: { count },
    });
  });
export const getAll = (Model, searchBy) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    if (req.customFilter) filter = req.customFilter;

    // build the query
    const features = new APIFeatures(
      Model.find(filter),
      // Model.find({}),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .pagination()
      .search(searchBy);
    // execute the query

    const doc = await features.query; //.explain();

    // send the response
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: { doc },
    });
  });
export const getOne = (Model, options = {}) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    let query = Model.findById(id);

    if (options.popOptions)
      query = query.populate(options.popOptions);

    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with '${id}' ID`, 404)
      );
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
export const updateOne = (Model, allowedFields) =>
  catchAsync(async (req, res, next) => {
    const filteredBody = filterObj(req.body, ...allowedFields);

    const updatedDoc = await Model.findByIdAndUpdate(
      req.params.id,
      filteredBody,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        doc: {
          ...updatedDoc._doc,
        },
      },
    });
  });

export const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
    });
  });
