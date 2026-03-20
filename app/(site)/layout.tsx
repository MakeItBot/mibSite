// Existing page components include <Layout> (Header + Footer) internally.
// This layout is a passthrough — no extra wrapper needed.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
