import { PDFDownloadLink } from "@react-pdf/renderer";
import CvPdfDocument from "./CvPdfDocument";

const PdfDownloadButton = () => {
  return (
    <PDFDownloadLink
      document={<CvPdfDocument />}
      fileName="cv.pdf"
      style={{ textDecoration: "none" }}
    >
      {({ loading }) => (
        <span className="cursor-pointer rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:scale-105 hover:bg-white/10">
          {loading ? "Generating PDF..." : "Download CV"}
        </span>
      )}
    </PDFDownloadLink>
  );
};

export default PdfDownloadButton;