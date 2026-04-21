import Link from "next/link"

export default function NotFound() {
  return (
    <main className="bg-[#121212] text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#FF4C60] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4 arabic-text">الصفحة غير موجودة</h2>
        <p className="text-[#B0B0B0] mb-8 arabic-text">
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF4C60] hover:bg-[#FF4C60]/90 text-white font-semibold arabic-text"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  )
}
