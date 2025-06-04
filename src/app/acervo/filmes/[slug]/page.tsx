import PageFilmeAcervo from '@/components/PageFilmeAcervo'
import {getFilmeAcervo} from '@/utils/getFilmeAcervo'
import React from 'react'

export default async function page({ params }: { params: { slug: string } }) {
  const filme = await getFilmeAcervo(params.slug)
  return <PageFilmeAcervo filme={filme} />
}
