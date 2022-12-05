const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '40%';
  alertContainer.style.top = '40%';
  // alertContainer.style.right = 0;
  // alertContainer.style.transform = 'translate(50%,50%);';
  alertContainer.style.padding = '20px 20px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = '1.5em';
  alertContainer.style.backgroundColor = '#bf772e';
  alertContainer.style.width = '500px';
  alertContainer.textContent = message;

  const alertBtn = document.createElement('button');
  alertBtn.style.display = 'block';
  alertBtn.style.marginRight = 'auto';
  alertBtn.style.marginLeft = 'auto';
  alertBtn.style.marginTop = '30px';
  alertBtn.style.padding = '15px 10px';
  alertBtn.style.border = '3px solid black';
  alertBtn.style.color = 'black';
  alertBtn.style.backgroundColor = 'transparent';

  alertBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    alertContainer.remove();
  });

  alertBtn.textContent = 'Закрыть';
  alertContainer.appendChild(alertBtn);


  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};
