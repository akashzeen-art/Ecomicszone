"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import dynamic from "next/dynamic"

// Lazy load PDF viewer
const PDFViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
  loading: () => <ReaderLoading />,
})

function ReaderLoading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-12 h-12 border-4 border-[#FF4C60] border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-white text-lg">Loading magazine...</p>
    </div>
  )
}

function ReaderContent() {
  const searchParams = useSearchParams()
  const file = searchParams.get('file')

  if (!file) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="p-8 text-red-500 text-center">No PDF file specified</div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 w-full h-screen">
      <PDFViewer file={file} />
    </div>
  )
}

export function ReaderClient() {
  return (
    <Suspense fallback={<ReaderLoading />}>
      <ReaderContent />
    </Suspense>
  )
}

