import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import './modal.js';

renderPictures(getPictures(12));
