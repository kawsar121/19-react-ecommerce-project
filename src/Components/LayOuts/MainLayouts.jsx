import React from 'react';
import Navbar from './Navbar';
import UpNav from './UpNav';
import Header from '../Header/Header';
import Carusol from '../Carousel/Carusol';
import AllProducts from '../AllProducts/AllProducts';
import AllIteams from '../AllIteams/AllIteams';
import Footer from './Footer/Footer';

const MainLayouts = () => {
    return (
        <div className="w-full m-0 p-0 justify-center">
            <nav className="w-full ">
                <UpNav></UpNav>
                <Navbar></Navbar>
            </nav>
            <header>
                <Header></Header>
                <section className=''><Carusol></Carusol></section>
            </header>
            <main>
                <section>
                    <AllProducts></AllProducts>
                </section>
                <section>
                    <AllIteams></AllIteams>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;