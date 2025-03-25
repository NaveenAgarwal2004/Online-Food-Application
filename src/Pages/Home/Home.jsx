import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Section1 from './Section1';
import '../../Styles/HomeStyle.css';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';

function Home() {
  return (
    <>
      <Layout>
        {/* ---Home (Hero Banner)--- */}
        <Section1 />

        {/* ---Home (About Us)--- */}
        <Section2/>

        {/* ---Home (Our Menu)--- */}
        <Section3/>

        {/* ---Home (Promotion)--- */}
        <Section4/>

        {/* ---Home (Shop)--- */}
        <Section5/>

        {/* ---Home (Review/Blog)--- */}
        <Section6/>

        {/* ---Home (Contact Us)--- */}
        <Section7/>
      </Layout>
    </>
  );
}

export default Home
