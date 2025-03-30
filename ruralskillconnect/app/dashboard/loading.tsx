export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-beige">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mb-4"></div>
        <p className="text-neutral-gray">Loading your dashboard...</p>
      </div>
    </div>
  )
}

