  const vcam = new Worker('./vcam.js');

  vcam.onmessage = ({ data: { event, state } }) => {
    addLogs(`cam: ${event} ${JSON.stringify(state)}`);
  }

/** @type {HTMLElement | null} */
const $logs = document.getElementById('logs');

function addLogs(log) {
  const li = document.createElement('li');
  li.innerText = log;

  if ($logs) {

    $logs.appendChild(li);
  }
}

/**
 * @param {(value: string) => void} callback
 */
function onSendLogs(callback) {
  /** @type {HTMLFormElement | null} */
  const $form = document.querySelector('form');
  if ($form) {
    /** @type {HTMLInputElement | null} */
    const $input = $form.querySelector('input');
    $form.onsubmit = (e) => {
      e.preventDefault();

      if ($input) {
        callback($input.value);
        $input.value = '';
      }
    }
  }
}