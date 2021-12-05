import React from 'react';
import Cursor from 'src/components/Cursor';
import Layout from 'src/components/layout/Layout';
import Roulette from 'src/components/roulette/Roulette';

const Page = () => {
  return (
  <>
  <Layout>
    <Cursor/>
    <Roulette/>
  </Layout>
  </>
  )
}

export default Page;
