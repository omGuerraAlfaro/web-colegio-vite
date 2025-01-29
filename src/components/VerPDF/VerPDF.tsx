import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

const FlipBookPDF = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number>(0); // Número de páginas
  const [pages, setPages] = useState<number[]>([]); // Array de páginas

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const loadPages = () => {
      const loadedPages: number[] = [];
      for (let i = 1; i <= numPages; i++) {
        loadedPages.push(i);
      }
      setPages(loadedPages);
    };
    loadPages();
  }, [numPages]);

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        onLoadError={(error) => console.error("Error al cargar el PDF:", error)}
      >
        <HTMLFlipBook
          width={650}
          height={500}
          size="fixed"
          minWidth={200}
          maxWidth={650}
          minHeight={200}
          maxHeight={500}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="my-flipbook"
          startPage={0}
          style={{ margin: "0 auto", marginBottom: "400px" }}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          usePortrait={true}
          clickEventForward={true}
          showPageCorners={true}
          startZIndex={0}
          autoSize={true}
          swipeDistance={30}
          disableFlipByClick={false}
        >
          {pages.map((page) => (
            <div key={page} className="page">
              <Page pageNumber={page} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
    </div>
  );
};

export default FlipBookPDF;
