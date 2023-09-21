import React, {useEffect} from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";
import Carousel from "../components/Carousel.component";
import Sponsor from "../components/Sponsor.component";
//Config
import {GallerySlides} from "../assets/config/configCarouselGallery";

export default function Home() {
    const slides = [
        {url: "http://localhost:3000/image-1.jpg", title: "beach"},
        {url: "http://localhost:3000/image-2.jpg", title: "boat"},
        {url: "http://localhost:3000/image-3.jpg", title: "forest"},
        {url: "http://localhost:3000/image-4.jpg", title: "city"},
        {url: "http://localhost:3000/image-5.jpg", title: "italy"},
    ];
    import About from "../components/About.component";

    export default function Home() {
        useEffect(() => {
            document.title = "Liga Studenților Electroniști";
        }, []);
        return (
            <>
                <Header/>
                <Banner/>
                <About/>
                <Stats/>
                <Carousel slides={GallerySlides}/>
                <Sponsor/>
                <Footer/>
            </>
        );
    }
}
