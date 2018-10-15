const Storage = require('@google-cloud/storage');

const config = {
  CLOUD_BUCKET: 'blog.teddydevstack.com',
  PROJECT_ID: 'fancy-to-do'
}

// confirm service api
const storage = Storage({
  projectId: config.PROJECT_ID,
  keyFilename: 'fancy-to-do-684a7e877064.json'
});

function storageUrl (filename) {
  return `https://storage.googleapis.com/${config.CLOUD_BUCKET}/${filename}`;
}

// middleware
function googleUpload (req, res, next) {
  console.log('===== gcs checking file... =====');
  console.log(req.file);
  if (!req.file) {
    console.log('no file uploaded, skipping...');
    return next();
  }
  const bucket = storage.bucket(config.CLOUD_BUCKET)

  let extension = req.file.originalname.split('.').pop()
  const destination = 'blogpic/'
  const uploadName = destination + Date.now() + 'e-com-pic.' + extension;
  const file = bucket.file(uploadName);

  // streaming
  const stream = file.createWriteStream({
    metadata: {
      contentType : req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = uploadName;
    file.makePublic()
      .then(() => {
        console.log('upload finished');
        req.file.cloudStoragePublicUrl = storageUrl(uploadName);
        next();
      });
  });

  stream.end(req.file.buffer);
}

function googleDelete (req, res, next) {
  let extra = 'https://storage.googleapis.com/test-shop.teddydevstack.com/';
  const targetFile = req.toDelete.imgUrl.substr(extra.length);
  console.log(targetFile);

  storage
    .bucket(config.CLOUD_BUCKET)
    .file(targetFile)
    .delete()
    .then(() => {
      console.log(`${config.CLOUD_BUCKET}/${targetFile} is deleted`);
      next()
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed to delete image'
      })
    })
}

module.exports = {
  googleUpload: googleUpload,
  googleDelete: googleDelete
};
