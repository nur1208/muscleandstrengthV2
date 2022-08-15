import APIFeatures from "../utils/apiFeatures.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

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

export const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // let filter = {};
    // if (req.params.tourId) filter = { tour: req.params.tourId };

    // build the query
    const features = new APIFeatures(
      //   Model.find(filter),
      Model.find(),
      req.query
    )
      .filter()
      .sort()
      .limitFields()
      .pagination();
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
