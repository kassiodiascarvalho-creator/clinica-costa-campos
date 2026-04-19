'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 35, suffix: '+', label: 'anos de história' },
  { target: 12, suffix: '+', label: 'Cidades atendidas' },
  { target: 25, suffix: '+', label: 'Especialidades' },
]

function useCounter(target: number, started: boolean, duration = 2000) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started) return

    const steps = 60
    const interval = duration / steps
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Easing: começa rápido e desacelera no final
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.round(eased * target)
      setValue(current)

      if (step >= steps) {
        setValue(target)
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [started, target, duration])

  return value
}

function StatItem({
  target,
  suffix,
  label,
  started,
  align,
}: {
  target: number
  suffix: string
  label: string
  started: boolean
  align: string
}) {
  const value = useCounter(target, started, 2200)

  return (
    <div className={`flex flex-col text-white ${align}`}>
      <span className="text-5xl sm:text-6xl font-extrabold leading-none tracking-tight">
        {suffix}{value}
      </span>
      <span className="text-teal-200 text-sm sm:text-base mt-1.5 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-teal-700 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
              align={i === 0 ? 'items-start' : i === 1 ? 'items-center' : 'items-end'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
