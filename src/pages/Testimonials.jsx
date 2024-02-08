import ImageSlider from "../components/ImageSlider";
import Img1 from '../assets/web.jpg';
import Img2 from '../assets/girlhero.png';
import img3 from '../assets/techbanner.jpg';



const App = () => {
  const slides = [
    { url: Img1, title: "Slide1" },
    { url: Img2, title: "Slide2" },
    { url: img3, title: "Slide3" },
  ];
  const containerStyles = {
   
    width: "900px",
    height: "100vh",
    margin: "0 auto",
    paddingTop: "200px",
    paddingBottom: "200px",
  };
  return (
    <div>
     
      <div style={containerStyles}>
        <br/>
        
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;