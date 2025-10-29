"use client";
import { useSearchParams } from "next/navigation";

export default function ViewerPage() {
    const searchParams = useSearchParams();
    const file = searchParams.get("file");

    if (!file)
        return (
            <div className="flex h-screen items-center justify-center text-white">
                File tidak ditemukan
            </div>
        );

    return (
        <div className="w-full h-screen flex flex-col">
            <iframe
                src={`/files/${file}#toolbar=1`}
                className="flex-1 w-full"
            />
        </div>
    );
}
