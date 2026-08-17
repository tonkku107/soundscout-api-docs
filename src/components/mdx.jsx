import defaultMdxComponents from 'fumadocs-ui/mdx';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import FieldTable from './fieldTable';
import Route from './route';

export function getMDXComponents(components) {
  return {
    ...defaultMdxComponents,
    ...components,
    TypeTable,
    FieldTable,
    Route,
  };
}

export const useMDXComponents = getMDXComponents;
