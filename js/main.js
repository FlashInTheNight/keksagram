// import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import {setOnFormSubmit} from './form.js';
import {hideModal} from './form.js';
import {showAlert} from './showAlert.js';


// renderPictures(getPictures());

const onLoadSuccess = (data) => {
  renderPictures(data);
};

const onLoadError = (error) => {
  showAlert(error);
};

getData(onLoadSuccess, onLoadError);

const onSendDataSuccess = () => {
  hideModal();
  showAlert('Фото успешно отправлено');
};

const onSendDataError = (message) => {
  showAlert(message);
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});
