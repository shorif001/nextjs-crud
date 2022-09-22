import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children, title}) => {
  return (
    <div>
       <Head>
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout