import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SideNav, TableOfContents, TopNav } from '../components';
import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-go.min';
import 'prismjs/components/prism-ruby.min';
// import 'prismjs/components/prism-php.min';
// import 'prismjs/components/prism-aspnet.min';
import '../styles/prism-themes/prism-coldark-dark.css';
// import 'prismjs/themes/prism-solarizedlight.css';
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import type { MarkdocNextJsPageProps } from '@markdoc/next.js'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
      <main>
        <Component {...pageProps} />
      </main>
      <TableOfContents toc={toc} />
    </div>
  </>;
}
