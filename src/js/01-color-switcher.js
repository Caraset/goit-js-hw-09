const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId;
const DELAY = 1000;

refs.startBtn.addEventListener('click', onBtnStartClick);
refs.stopBtn.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  intervalId = setIntervalImmediately(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    DELAY,
  );
  toggleBtnsActiveStatus();
}

function toggleBtnsActiveStatus() {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');
}

function onBtnStopClick() {
  clearInterval(intervalId);
  toggleBtnsActiveStatus();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setIntervalImmediately(func, interval) {
  func();
  return setInterval(func, interval);
}
