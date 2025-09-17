import React from 'react';
import Navbar from './Navbar';
import UpNav from './UpNav';
import Header from '../Header/Header';
import Carusol from '../Carousel/Carusol';
import AllProducts from '../AllProducts/AllProducts';
import AllIteams from '../AllIteams/AllIteams';
import Footer from './Footer/Footer';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';
import SectionFive from '../SectionFive/SectionFive';
import SectionSix from '../SectionSix/SectionSix';
import SectionSeven from '../SectionSeven/SectionSeven';
import SectionEigth from '../SectionEigth/SectionEigth';
import SectionNine from '../SectionNine/SectionNine';

const MainLayouts = () => {
    return (
        <div className="w-full m-0 p-0 justify-center font-mulish">
            <nav className="w-full ">
                <UpNav></UpNav>
                <Navbar></Navbar>
            </nav>
            <header>
                <Header></Header>
                {/* <section className=''>
                    <Carusol></Carusol>
                </section> */}
            


                    <section>
                        <SectionOne></SectionOne>
                    </section>
                    <section>
                        <SectionTwo></SectionTwo>
                    </section>
                    <section>
                        <SectionThree></SectionThree>
                    </section>
            </header>
            <main>
                {/* <section>
                    <AllProducts></AllProducts>
                </section> */}
                {/* <section>
                    <AllIteams></AllIteams>
                </section> */}
                <section>
                    <SectionFour></SectionFour>
                </section>
                <section>
                    <SectionFive></SectionFive>
                </section>
                <section>
                    <SectionSix></SectionSix>
                </section>
                <section>
                    <SectionSeven></SectionSeven>
                </section>
                <section>
                    <SectionEigth></SectionEigth>
                </section>
                <section>
                    <SectionNine></SectionNine>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;