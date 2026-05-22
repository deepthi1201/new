interface Props {
  title: string
  description: string
}

export default function Placeholder({ title, description }: Props) {
  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">{title}</h1>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
      <div className="bg-white border border-dashed border-gray-200 rounded-xl p-12 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
          <div className="w-5 h-5 rounded-full bg-violet-200" />
        </div>
        <p className="text-gray-600 font-medium">Coming Soon</p>
        <p className="text-gray-400 text-sm mt-1 max-w-xs">
          This module is currently under development and will be available soon.
        </p>
      </div>
    </div>
  )
}
