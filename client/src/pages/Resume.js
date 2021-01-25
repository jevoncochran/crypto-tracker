import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/pdf_files/jc_resume_jan2021.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      <button
        style={{ marginBottom: "2%" }}
        onClick={() => props.history.push("/")}
      >
        Back to Home
      </button>
      <div>
        <nav>
          <button onClick={pageNumber !== 1 ? goToPrevPage : null}>Prev</button>
          <button onClick={pageNumber !== numPages ? goToNextPage : null}>
            Next
          </button>
        </nav>

        <div style={{ width: 600 }}>
          <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={1200} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default Resume;
