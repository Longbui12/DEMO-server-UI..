const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, require: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, require: true, maxLength: 400 },
    level: { type: String, require: true, maxLength: 600 },
    image: { type: String, maxLength: 400 },
    slug: { type: String, slug: "name", unique: true },
  },
  { _id: false, timestamps: true }
);

// Custom query helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidatetype = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidatetype ? req.query.type : "desc",
    });
  }
  return this;
};

// Add plugins
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
// CourseSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Course", CourseSchema);
