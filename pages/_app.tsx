import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/globals.css'
import { SideNav, TableOfContents, TopNav } from '../components';

import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'Foodetective API reference';
const DESCRIPTION = 'A powerful, flexible, Markdown-based authoring framework';

function collectHeadings(node, sections = []) {
  
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export type MyAppProps = MarkdocNextJsPageProps

export default function MyApp({ Component, pageProps }: AppProps) {
  
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav>
        <Link href="/docs">Docs</Link>
      </TopNav>
      <div className="fixed flex w-screen grow top-0">
        <SideNav />
        <main className="flex column overflow-auto grow text-base pt-20 pl-4 h-screen">
          <Component {...pageProps} />
        </main>
        <TableOfContents toc={toc} />
      </div>
    </>
  );
}
