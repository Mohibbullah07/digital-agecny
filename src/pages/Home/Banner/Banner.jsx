import "./Banner.css"

const Banner = () => {
    return (
     <div id="banner" className="py-28 flex flex-col justify-center items-center">
    <div className="my-4">

        <h1 className="text-6xl text-white "> <span className="text-red-600 font-bolder ">
        Digital </span>  Agency You <br />
Can Rely Upon !</h1>
<p className="text-xl text-white mt-4">Hymenaeos! Omnis arcu vitae? Phasellus irure cupidatat incidunt, <br /> semper metus, nibh adipisci assumenda odio, quos, <br /> senectus vehicula occaecat, officiis malesuada cras.</p>
</div>





  <div className="py-4">
  <button className="btn btn-active btn-secondary uppercase mx-4">Discover Me</button>
  <button className="btn btn-outline btn-error uppercase">Hire Us Now</button>
    
  </div>
 
  
     </div>
    );
};

export default Banner;