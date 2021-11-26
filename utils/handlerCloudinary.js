import axios from 'axios';
import {URL_Cloudinary} from './../assets/common/baseUrl';
import {cloudinary} from './../assets/common/cloudinary';

//upload hots
export const parseImgCloudinary = async formdata => {
  return await axios
    .post(URL_Cloudinary, formdata)
    .then(function (response) {
      console.log(
        '🚀 ~ file: handlerCloudinary.js ~ line 9 ~ response',
        response,
      );
      return response.data.url;
    })
    .catch(function (error) {
      console.log('cloudinary', error);
    });
};
export const getAllLinkFromImageBase64 = async imageBase64 => {
  let images = [];

  for (let i = 0; i < imageBase64.length; i++) {
    const file = imageBase64[i];

    let formdata = new FormData();

    formdata.append(cloudinary.FILE, file);
    formdata.append(cloudinary.UPLOAD_PRESET, 'upload_hots');

    const url = await parseImgCloudinary(formdata);

    images.push(url);
  }
  return images;
};
