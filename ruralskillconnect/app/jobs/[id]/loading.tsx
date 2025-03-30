export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-crimson-600 mb-4"></div>
        <p className="text-gray-600">Loading job details...</p>
      </div>
    </div>
  )
}

