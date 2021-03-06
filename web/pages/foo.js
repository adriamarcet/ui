import React from 'react';
import Head from 'next/head';

import Code from '../components/Code';

const Foo = () => (
  <>
    <Head>
      <title>Component Foo</title>
    </Head>

    <h1>Foo component</h1>
    <Code component='foo' />
  </>
);

export default Foo;
