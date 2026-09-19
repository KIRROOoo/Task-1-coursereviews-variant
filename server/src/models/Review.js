import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      // Optional by default if 'required' is not set to true
    },
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // Optional field
    },
  },
  { timestamps: true }
);

// Compound unique index: One review per user per course
reviewSchema.index({ courseCode: 1, reviewedBy: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);