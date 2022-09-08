export default class APIFeatures {
  constructor(query, queryString, isCount = false) {
    this.query = query;
    this.queryString = queryString;

    this.isCount = isCount;
  }

  filter() {
    // 1A) filtering
    const queryObj = { ...this.queryString };
    const excludedFields = [
      "page",
      "sort",
      "limit",
      "fields",
      "q",
    ];

    excludedFields.forEach((el) => delete queryObj[el]);

    // method way
    // const query = Tour.find()
    //   .where("duration")
    //   .equals(5)
    //   .where("difficulty")
    //   .equals("easy");

    // 1B) Advanced filtering
    //  object filter way
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    if (this.isCount)
      this.query.countDocuments(JSON.parse(queryStr));
    else this.query.find(JSON.parse(queryStr));
    // let query = Tour.find(JSON.parse(queryStr));
    return this;
  }

  search(by) {
    if (!this.queryString.q) return this;
    const queryOr = [];

    for (let index = 0; index < by.length; index++) {
      // for (let index = 0; index < 1; index++) {
      const item = by[index];
      const tempObject = {};
      tempObject[item] = {
        $regex: this.queryString.q,
        $options: "i",
      };

      queryOr.push(tempObject);
      // {
      //   $regex: `(\\b)${this.queryString.q}`,
      //   $options: "i",
      // };
    }

    if (this.isCount)
      this.query.countDocuments({ $or: queryOr });
    else this.query.find({ $or: queryOr });

    return this;
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");

      this.query = this.query.sort(sortBy);
      // if you want to stor in more than one criteria
      // stor("1C 2C .. nC")
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields
        .split(",")
        .join(" ");
      this.query = this.query.select(fields);
    }
    this.query = this.query.select(`-__v`);

    return this;
  }

  pagination() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    // if (this.query.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip > numTours) {
    //     throw new Error("This page dose not exit");
    //   }
    // }

    return this;
  }
}
