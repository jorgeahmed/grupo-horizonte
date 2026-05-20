export default function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
      <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-blue-700" />
      </div>
      <h3 className="text-4xl font-bold text-slate-900 mb-2">{value}</h3>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  )
}
