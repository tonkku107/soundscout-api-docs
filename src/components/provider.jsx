'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';

export function Provider({ children }) {
  return <RootProvider search={{ SearchDialog }}>{children}</RootProvider>;
}
