import React from 'react'

const Carousal = () => {
    return (
        <div id="carouselExampleAutoplaying mt-5" className="carousel slide" data-bs-ride="carousel"  >
            <div className="carousel-inner" id="carousel">
                <div className="carousel-item active">
                    <img
                        src="https://images.unsplash.com/photo-1551522435-a13afa10f103"
                        className="d-block w-100"
                        alt="garage"
                    />
                </div>
                <div className="carousel-item ">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1676998430751-4d1afe29a8a1"
                        className="d-block w-100"
                        alt="garage"
                    />
                </div>
                <div className="carousel-item ">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1676998430827-aee8e597b013"
                        className="d-block w-100"
                        alt="garage"
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    
    )
}

export default Carousal


//  {/* <div >
//             <div id="carouselExampleAutoplaying  " className="carousel slide" data-bs-ride="carousel" >
//                 <div className="carousel-inner" id='carousal'>
//                     <div className="carousel-item active">
//                         <img src="https://tse1.mm.bing.net/th?id=OIP.Fg-lpJPy-YJrO5dGAcAY-AHaE6" className="d-block w-100 h-10" alt="Garage" />
//                     </div>
//                     <div className="carousel-item ">
//                         <img src="https://tse4.mm.bing.net/th?id=OIP.uhEEhnxJZXntTsJq-u9i1AHaE8" className="d-block w-100" alt="Garage" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="https://tse3.mm.bing.net/th?id=OIP.bpg8wWtzB52kfvy9KWD4zgHaE8" className="d-block w-100" alt="Garage" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div> */}