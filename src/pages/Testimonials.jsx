import ImageSlider from "../components/ImageSlider";
import Img1 from '../assets/comment1.png';
import Img2 from '../assets/comment2.png';
import img3 from '../assets/comment3.png';



const App = () => {
  const slides = [
    { url: Img1, title: "Slide1" },
    { url: Img2, title: "Slide2" },
    { url: img3, title: "Slide3" },
  ];
  const containerStyles = {
   
    width: "1000px",
    height: "1400px",
    margin: "0 auto",
    paddingTop: "200px",
    paddingBottom: "200px", 
    backgroundSize: "cover",
  };
  return (
    <div>
      <br/>
      <div style={containerStyles} className="main-comment-style">
        <br/>
        
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;