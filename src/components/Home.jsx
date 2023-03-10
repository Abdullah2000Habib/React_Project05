import React from 'react';
import Footer from './Footer';
import Hero from './Hero/Hero';
import Join from './Join/Join';
import Plans from './Plans/Plans';
import Program from './Program/Program';
import Reasons from './Reasons/Reasons';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
return (
    <>
        <Hero/>
        <Program />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
    </>
)
}
