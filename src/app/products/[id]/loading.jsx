export default function LoadingProduct() {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="h-10 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="w-full h-80 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-1/6 animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }
  