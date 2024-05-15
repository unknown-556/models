import mongoose from 'mongoose';
import Cloudinary from 'cloudinary';


const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 60,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  views: {
    type: Number,
    required: true,
    default: 0,
  },
  cloudinary_id: {
    type: String, 
  },
  video_path: {
    type: String, 
  },
});

const Video = mongoose.model('Video', videoSchema);

Video.statics.uploadVideo = async (video, opts) => {
  const uploader = new Cloudinary('658654674272229', opts);
}