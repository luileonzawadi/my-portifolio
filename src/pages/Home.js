import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioItem from '../components/PortfolioItem';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="intro">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm [Your Name], a passionate [Your Profession]. Here are some of my featured projects.</p>
                </section>
                <section className="featured-projects">
                    <h2>Featured Projects</h2>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;