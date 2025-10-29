"use client";
import { useState } from "react";

export default function PdfViewer() {
    const [showPdf, setShowPdf] = useState(false);

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                onClick={() => setShowPdf(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Lihat PDF
            </button>

            {showPdf && (
                <div className="w-full max-w-3xl h-[600px] mt-4 border rounded-lg overflow-hidden">
                    <iframe
                        src="/files/PROSEDUR PENYEWAAN KAPAL PT TRANS MARINDO SUCCES.pdf#toolbar=0"
                        className="w-full h-full"
                    />
                </div>
            )}
        </div>
    );
}
