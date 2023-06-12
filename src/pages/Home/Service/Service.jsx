import img1 from "../../../assets/icons/coding.png"
import img2 from "../../../assets/icons/bar-chart.png"
import img3 from "../../../assets/icons/digital-marketing.png"
import img4 from "../../../assets/icons/phone-call.png"
import img5 from '../../../assets/image/author.jpg';
const Service = () => {
    return (
        <div className="bg-black md:grid md:grid-cols-2 py-32 px-28 ">
    

          
            <div>
       <span className="bg-white p-2 mb-6 rounded-md text-xl">Service List</span>
            <h1 className="text-white text-2xl font-bold mt-6"><span className="text-red-600">Service</span> We Can Help You With !</h1>
            <ul className="list-none mt-6 text-white">

        
         <li>
         Vero id posuere tempus aspernatur
         </li>
         <li>
         quaerat mollis voluptatum eveniet porro
         </li>
         <li>viverra libero habitasse porro fames quos</li>
         <li>pharetra diam cupidatat ligula! Netus!</li>
         <li>Quos dignissi mos laoreet.</li>
         </ul>
         <ul className="text-white list-disc mt-6">
            <li >Nobis ridiculus cupiditate egestas commodi.</li>
            <li>Ipsum dui curabitur dapibuish mollitia.</li>
       </ul>

        <div className="text-white flex items-center">
       <img className="w-24 rounded-full" src={img5} alt="" />
       <div >
       <p >George Smith</p>
       <p>CEO, Director</p>
       </div>

       <button className="mx-10 border-s-red-800">More Details</button>
        </div>

            </div>

            <div className="grid grid-cols-2 gap-4">


        <div className="bg-white rounded-lg text-center h-60">
            <img className="w-20 mx-auto mt-6 " src={img1} alt="" />
            <h2 className="text-2xl text-black font-bold mt-10">Website Development</h2>
        </div>

        <div className="bg-white rounded-lg text-center h-60">
            <img className="w-20 mx-auto  mt-6" src={img2} alt="" />
            <h2 className="text-2xl text-black font-bold mt-10">Bar Chart</h2>
        </div>

        <div className="bg-white rounded-lg text-center h-60">
            <img className="w-20 mx-auto  mt-6 " src={img3} alt="" />
            <h2 className="text-2xl text-black font-bold mt-10">Digital Marketing</h2>
        </div>

        <div className="bg-white rounded-lg text-center h-60">
            <img className="w-20 mx-auto  mt-6 " src={img4} alt="" />
            <h2 className="text-2xl text-black font-bold mt-10">Phone Call</h2>
        </div>

            </div>
            </div>
   
 
    );
};

export default Service;