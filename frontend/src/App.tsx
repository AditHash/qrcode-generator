import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateQRCode = async () => {
    if (!text) {
      setError('Text is required');
      return;
    }

    try {
      // for local uncomment below code
      // const response = await fetch('http://127.0.0.1:8000/generate-qr', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ text }),
      // });

      // for deployment in docker uncomment below code
      const response = await fetch('http://backend:8000/generate-qr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }

      const data = await response.json();
      setQrCode(data.qr_code);
      setError(null);
    } catch (err) {
      setError('Failed to generate QR code');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>QR Code Generator</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <br />
          <button onClick={generateQRCode}>Generate QR Code</button>
        </div>
        {error && <p className="error">{error}</p>}
        {qrCode && (
          <div className="qr-code-container">
            <img src={qrCode} alt="Generated QR Code" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;