import PageTerritoriais from '@/components/PageTerritoriais'
import ListaTerritoriais from '@/components/ui/ListaTerritoriais'
import SidebarTerritoriais from '@/components/ui/SidebarTerritoriais'
import React from 'react'
import { getTerritoriais } from '@/utils/getTerritoriais';

export default async function page() {
  const { territoriais, page } = await getTerritoriais();

  return (
    <PageTerritoriais territoriais={territoriais.nodes} content={page.content} />
  )
}
