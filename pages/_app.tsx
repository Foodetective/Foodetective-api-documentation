import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SideNav, TableOfContents, TopNav } from '../components';
import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/themes/prism-solarizedlight.css';
import '../public/globals.css'
import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'

const TITLE = 'Foodetective API reference';
const DESCRIPTION = 'Foodetective API reference';

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

export default function MyApp({ Component, pageProps }: AppProps<MyAppProps>) {
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

  return <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="strict-origin" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="font" href="" />
    </Head>
    <TopNav>
      <Link href="/docs" legacyBehavior>Docs</Link>
    </TopNav>
    <div className="page">
      <SideNav />
      <main className="flex column">
        <Component {...pageProps} />
      </main>
      <TableOfContents toc={toc} />
    </div>
    <style jsx>
      {`
        .page {
          position: fixed; 
          top: var(--top-nav-height);
          display: flex;
          width: 100vw;
          flex-grow: 1;
          background-color: #fbfcfd;
        }
        main {
          overflow: auto;
          height: calc(100vh - var(--top-nav-height));
          flex-grow: 1;
          font-size: 16px;
          padding: 0.5rem 1.5rem;
        }
      `}
    </style>
  </>;
}
