import About from "./Comp/About";
import CopyWrite from "./Comp/CopyWrite";
import DJNightCard from "./Comp/DJNightCard";
import Home from "./Comp/Home";
import HomeBtm from "./Comp/HomeBtm";
import Navbar from "./Comp/Navbar";
import YoutubeFeed from "./Comp/YoutubeFeed";

const App = () => {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Discography", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Videos", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <div className="HeroBg2">
        <Navbar links={navLinks} />
        <Home />
      </div>
      <HomeBtm />

      <div className="p-8">
        <About />
      </div>

      <div className="p-8">
        <DJNightCard
          title="DJ Night"
          tagline="I have everything to make your life bright!"
          manager={{ name: "Don Johnson", email: "don@email.com", phone: "+123-456-7890" }}
          director={{ name: "Rita Smith", email: "rita@email.com", phone: "+123-456-7890" }}
        />      
        </div>
        <YoutubeFeed/>

    </>
  );
};

export default App;
