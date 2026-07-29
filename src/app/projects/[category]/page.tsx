import { notFound } from 'next/navigation';

import ProjectsCategory from '@/components/pages/projects/category';
import { projectCategories } from '@/utils/projects';

export function generateStaticParams() {
  return Object.keys(projectCategories).map((category) => ({ category }));
}

// Серверная обёртка: 'use client' несовместим с generateStaticParams, а без проверки
// слага /projects/что-угодно отрисовалось бы пустой страницей вместо 404.
export default async function Category({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const data = projectCategories[category];

  if (!data) notFound();

  return <ProjectsCategory category={data}></ProjectsCategory>;
}
