import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function Work() {
    const [images, setImages] = useState([
        {link:"https://www.netflix.com/in/" ,url: "https://www.allconnect.com/wp-content/uploads/2020/02/netflix-review-hero-image-0224.png", top: "50%", left: "5%", isActive: false, height: "30vh", width: "20vw" },
        {link:"https://www.zee5.com/" ,url: "https://wallpapercave.com/wp/wp9412360.jpg", top: "50%", left: "17%", isActive: false, height: "40vh", width: "25vw" },
        {link:"https://www.sonyliv.com/", url: "https://www.bizasialive.com/wp-content/uploads/2020/05/899ec721-sonylivnew001.jpg", top: "50%", left: "75%", isActive: false, height: "30vh", width: "20vw" },
        {link:"https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root", url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Amazon_Prime_Video_blue_logo_1.svg", top: "50%", left: "60%", isActive: false, height: "40vh", width: "25vw" },
        {link:"https://www.hotstar.com/in/home", url: "https://wallpapercave.com/wp/wp10139546.png", top: "50%", left: "33%", isActive: false, height: "50vh", width: "30vw" }
    ]);

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            moveRight();
        } else if (event.key === 'ArrowLeft') {
            moveLeft();
        }
    };

    const moveRight = () => {
        setImages(prevImages => {
            const newImages = prevImages.map((image, index) => {
                const newIndex = (index + 1) % prevImages.length;
                return { ...image, url: prevImages[newIndex].url };
            });
            return newImages;
        });
    };

    const moveLeft = () => {
        setImages(prevImages => {
            const newImages = prevImages.map((image, index) => {
                const newIndex = (index - 1 + prevImages.length) % prevImages.length;
                return { ...image, url: prevImages[newIndex].url };
            });
            return newImages;
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='w-full h-[85vh]'>
            <div className='max-w-screen-xl mx-auto pb-[15vh]'>
                <div className='top-0 w-full h-full'></div>
                <div className="flex justify-between">
                    
                    {images.map((elem, index) => (
                        <img
                            key={index}
                            className='absolute w-60 rounded-lg -tranlate-x-[50%] -translate-y-[50%]'
                            src={elem.url}
                            style={{ top: elem.top, left: elem.left, height: elem.height, width: elem.width, objectFit: 'cover' }}
                            alt=''
                        />
                    ))}
                    <div className='absolute gap-10 flex justify-content items-center mt-[70vh] ml-[39vw]'>
                    <button className='focus:outline-none' onClick={moveLeft}><FaAngleDoubleLeft /></button>
                    <button  className='focus:outline-none' onClick={moveRight}><FaAngleDoubleRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
