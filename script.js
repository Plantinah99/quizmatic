const form = document.getElementById('math-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operation = document.getElementById('operation').value;
  const response = await fetch('/api/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ num1, num2, operation }),
  });
  const result = await response.json();
  resultDiv.innerText = `Result: ${result.result}`;
});`
