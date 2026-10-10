// Exam list used by the home page search and the exams page.
// To add an exam: put the PDF in the pdfs folder, then copy one line below and change it.
// grade / subject / level must match the filter options in exams.html exactly.
// type is "الفصلي" or "الشهري". Use pdf: "" if there is no PDF.
// Optional: add photos of the pages (one box appears per picture), e.g.
//   images: ["images/math-2024-1.jpg", "images/math-2024-2.jpg"]
// Put the pictures in a folder called images. Use only English letters, numbers, - and _ in names.
const exams = [
  // الصف الثاني عشر
  
  // الصف الحادي عشر
  { grade: "الصف الحادي عشر", subject: "الكيمياء", type: "الفصلي", year: "2024", level: "5 وحدات", pdf: "pdfs/11-chemistry-2024-final.pdf" },
  { grade: "الصف الحادي عشر", subject: "الرياضيات", type: "الفصلي", year: "2024", level: "5 وحدات", pdf: "pdfs/11-math-2024-final.pdf" },
  { grade: "الصف الحادي عشر", subject: "دين", type: "الفصلي", year: "2024", level: "5 وحدات", pdf: "pdfs/11-religion-2024-final.pdf" },
  { grade: "الصف الحادي عشر", subject: "الفيزياء", type: "الفصلي", year: "2025", level: "5 وحدات", pdf: "pdfs/11-physics-2025-final.pdf" },
  // الصف العاشر
  { grade: "الصف العاشر", subject: "الفيزياء", type: "الفصلي", year: "2024", level: "5 وحدات", pdf: "pdfs/10-physics-2024-final.pdf" }

  // Add new exams above this line, each one ending with a comma except the last.
];
