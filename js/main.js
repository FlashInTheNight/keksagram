import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import './form.js';
import './edit-photo.js';

renderPictures(getPictures());
