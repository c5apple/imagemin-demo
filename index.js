const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const fs = require('fs');

fs.readdir('dist', (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    fs.unlinkSync('dist/' + file);
  });
});

imagemin(['src/*.{jpg,JPG,png,gif,svg}'], 'dist', {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [0.65, 0.8] }),
    imageminGifsicle(),
    imageminSvgo()
  ]
}).then(() => {
  console.log('Images optimized');
});
