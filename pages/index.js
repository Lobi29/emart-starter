import React from 'react';

import { client } from '../lib/client';

import { FooterBanner, HeroBanner, Product } from '../components';

const Home = ({ products, bannerData }) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0] } />


      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {/* {["product1", "Product2"].map((product) => product)} */}
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
};

// const client = createClient({
//   projectId: 'k5hwfddx',
//   dataset: 'production',
//   apiVersion: '2023-03-30',
//   useCdn: true
// });

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }


export async function getStaticProps() {
  const products = await client.fetch('*[_type == "product"]');

  const bannerData = await client.fetch('*[_type == "banner"]');

  return {
    props: {
      products,
      bannerData
    }
  };
}



export default Home;