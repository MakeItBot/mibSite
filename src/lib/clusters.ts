import type { Cluster, Spoke } from '@/types/cluster'
import agendamentoInteligenteData from '@/data/clusters/agendamento-inteligente.json'

const clusters: Record<string, Cluster> = {
  'agendamento-inteligente': agendamentoInteligenteData as Cluster,
}

export function getCluster(clusterId: string): Cluster | null {
  return clusters[clusterId] ?? null
}

export function getAllClusters(): Cluster[] {
  return Object.values(clusters)
}

export function getAllClusterSlugs(): string[] {
  return Object.keys(clusters)
}

export function getSpoke(clusterId: string, spokeSlug: string): Spoke | null {
  const cluster = getCluster(clusterId)
  if (!cluster) return null
  return cluster.spokes.find((s) => s.slug === spokeSlug) ?? null
}

export function getAllSpokeSlugs(): { cluster: string; spoke: string }[] {
  return getAllClusters().flatMap((cluster) =>
    cluster.spokes.map((spoke) => ({
      cluster: cluster.cluster_id,
      spoke: spoke.slug,
    }))
  )
}

export function getRelatedSpokes(cluster: Cluster, spokeSlug: string): Spoke[] {
  const spoke = cluster.spokes.find((s) => s.slug === spokeSlug)
  if (!spoke) return []
  return cluster.spokes.filter((s) => spoke.related_spokes.includes(s.slug))
}
