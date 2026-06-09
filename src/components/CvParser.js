import { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).toString();

function CvParser({ onTextExtracted }) {
  

  async function extractText(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(item => item.str).join(' ') + '\n';
    }
    // console.log(text); // check it's working
    // return text;
    
    onTextExtracted(text); // pass it up
  }

const [isDragging, setIsDragging] = useState(false);
const [fileName, setFileName] = useState('');

async function handleDrop(e) {
  e.preventDefault();
  setIsDragging(false);
  const file = e.dataTransfer.files[0];
  if (file && file.type === 'application/pdf') {
    setFileName(file.name);
    await extractText(file);
  } else {
    alert('Please drop a PDF file');
  }
}

return (
  <div
    onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
    onDragLeave={() => setIsDragging(false)}
    onDrop={handleDrop}
    className={isDragging ? 'dropzone dragging' : 'dropzone'}
  >
    {fileName ? (
      <>
        <div className="dropzone-icon">✓</div>
        <p className="dropzone-title">{fileName}</p>
        <p className="dropzone-sub">Drop a new file to replace</p>
      </>
    ) : (
      <>
        <div className="dropzone-icon">↑</div>
        <p className="dropzone-title">Drop your CV here</p>
        <p className="dropzone-sub">PDF only</p>
      </>
    )}
  </div>
);
}

export default CvParser;