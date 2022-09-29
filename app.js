// https://www.omnicalculator.com/other/film

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const filmlengthRadio = document.getElementById('filmlengthRadio');
const framerateRadio = document.getElementById('framerateRadio');
const framesRadio = document.getElementById('framesRadio');
const runtimeRadio = document.getElementById('runtimeRadio');

let filmlength;
let framerate = v1;
let frames = v2;
let runtime = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

filmlengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Frame rate';
  variable2.textContent = 'Frames';
  variable3.textContent = 'Run-time';
  framerate = v1;
  frames = v2;
  runtime = v3;
  result.textContent = '';
});

framerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Film length';
  variable2.textContent = 'Frames';
  variable3.textContent = 'Run-time';
  filmlength = v1;
  frames = v2;
  runtime = v3;
  result.textContent = '';
});

framesRadio.addEventListener('click', function() {
  variable1.textContent = 'Film length';
  variable2.textContent = 'Frame rate';
  variable3.textContent = 'Run-time';
  filmlength = v1;
  framerate = v2;
  runtime = v3;
  result.textContent = '';
});

runtimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Film length';
  variable2.textContent = 'Frame rate';
  variable3.textContent = 'Frames';
  filmlength = v1;
  framerate = v2;
  frames = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(filmlengthRadio.checked)
    result.textContent = `Film length = ${computefilmlength().toFixed(2)}`;

  else if(framerateRadio.checked)
    result.textContent = `Frame rate = ${computeframerate().toFixed(2)}`;

  else if(framesRadio.checked)
    result.textContent = `Frames = ${computeframes().toFixed(2)}`;

  else if(runtimeRadio.checked)
    result.textContent = `Run-time = ${computeruntime().toFixed(2)}`;
})

// calculation

// filmlength = (runtime * framerate * 60) / frames

function computefilmlength() {
  return (Number(runtime.value) * Number(framerate.value) * 60) / Number(frames.value);
}

function computeframerate() {
  return (Number(filmlength.value) * Number(frames.value)) / (Number(runtime.value) * 60);
}

function computeframes() {
  return (Number(runtime.value) * Number(framerate.value) * 60) / Number(filmlength.value);
}

function computeruntime() {
  return (Number(filmlength.value) * Number(frames.value)) / (Number(framerate.value) * 60);
}