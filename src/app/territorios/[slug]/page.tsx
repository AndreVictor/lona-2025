import PageTerritorio from '@/components/PageTerritorio'
import getTerritorio from '@/utils/getTerritorio'

export default async function Page({ params }: { params: { slug: string } }) {
  const territorio = await getTerritorio(params.slug)
  return <PageTerritorio territorio={territorio} />
}
