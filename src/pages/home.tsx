import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';

export const Home = () => {
    const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}} />
        <main>
            <section className="section1">
                <Chart1/>
                <Chart2/>
            </section>
            <section className="bordered section2">
                <Chart3/>
            </section>
            <section className="bordered section3">

            </section>
            <section className="bordered section4">

            </section>
            <section className="bordered section5">

            </section>
        </main>
        <footer>
            &copy; https://github.com/PoyapLi 2021-{year}
        </footer>
    </div>
  );
};
