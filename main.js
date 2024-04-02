
const colors = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'LightSalmon', 'Crimson', 'Red'];

const colorDiv = document.getElementById('cajaColor');

const textInput = document.getElementById('textInput');

textInput.addEventListener('input', function() {
  const inputValue = textInput.value;
  if (inputValue.length === 0) {
    colorDiv.style.backgroundColor = 'white'; // Restablecer el color
    return;
  }
  const charIndex = inputValue.length - 1;
  const colorIndex = charIndex % colors.length;
  const color = colors[colorIndex];
  colorDiv.style.backgroundColor = color;
});