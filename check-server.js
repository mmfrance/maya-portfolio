const http = require('http');

http.get('http://localhost:5173', (res) => {
  console.log(`Status: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HTML length:', data.length);
    console.log('Has root div:', data.includes('id="root"'));
    console.log('Has React script:', data.includes('main.jsx'));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
