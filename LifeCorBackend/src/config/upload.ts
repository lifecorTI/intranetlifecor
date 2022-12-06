import multer from "multer";
import path from "path";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "tmp"),
    filename: (request, file, cb) => {
      const filename = `${file.originalname}`;

      cb(null, filename);
    },
  }),
};
