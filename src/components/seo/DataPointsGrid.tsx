import type { DataPoint } from '@/types/cluster'

interface DataPointsGridProps {
  dataPoints: DataPoint[]
  title?: string
}

export function DataPointsGrid({ dataPoints, title }: DataPointsGridProps) {
  return (
    <section className="py-10 bg-muted/50">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-xl font-semibold mb-6 text-center">{title}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dataPoints.map((dp, i) => (
            <div key={i} className="text-center p-4 bg-background rounded-lg border border-border">
              <p className="text-3xl font-bold text-primary mb-1">{dp.metric}</p>
              <p className="text-sm text-muted-foreground">{dp.label ?? dp.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
