import React from 'react';
import NextHead from 'next/head';

const Head = () => {
  return (
    <NextHead>
      <title>Théo Lévêque</title>
      <meta name='description' content="Théo Lévêque's personal website" />
      <link rel='icon' href='/favicon.svg' />
    </NextHead>
  );
};

export default Head;
