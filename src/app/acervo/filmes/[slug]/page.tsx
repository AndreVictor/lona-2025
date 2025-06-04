import PageFilmeAcervo from '@/components/PageFilmeAcervo'
import {getFilmeAcervo} from '@/utils/getFilmeAcervo'
import React from 'react'

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filme = await getFilmeAcervo(slug);
  return <PageFilmeAcervo filme={filme} />;
}
