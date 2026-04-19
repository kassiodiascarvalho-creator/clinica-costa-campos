const stats = [
  { number: '+35', label: 'anos de história' },
  { number: '+12', label: 'Cidades atendidas' },
  { number: '+25', label: 'Especialidades' },
]

export default function StatsStrip() {
  return (
    <section className="bg-teal-700 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col text-white ${
                i === 0 ? 'items-start' : i === 1 ? 'items-center' : 'items-end'
              }`}
            >
              <span className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight">
                {stat.number}
              </span>
              <span className="text-teal-200 text-sm sm:text-base mt-1.5 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
