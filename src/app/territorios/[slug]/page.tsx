import PageTerritorio from '@/components/PageTerritorio'
import getTerritorio from '@/utils/getTerritorio'
import React from 'react'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const territorio = await getTerritorio(slug)
  return <PageTerritorio territorio={territorio} />
}
