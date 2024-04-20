import ViewComponent from "../../components/ViewComponent/ViewComponent";
import tproduct1 from "../../images/tproduct1.png"
import tproduct2 from "../../images/tproduct2.png"
import tproduct3 from "../../images/tproduct3.png"
import tproduct4 from "../../images/tproduct4.png"
import tproduct5 from "../../images/tproduct5.png"
import tproduct6 from "../../images/tproduct6.png"
import tproduct7 from "../../images/tproduct7.png"
import tproduct8 from "../../images/tproduct8.png"


function Home() {
  const headings = {
    headingOne: "Profile",
    headingTwo: "Name",
  };

  const handleClickView = (e) => {
    console.log(e, "ee");
    console.log("object");
  };

  const HomeData = [
    {
      _id:1,
      image:tproduct1,
      title: "Hospital Bed",
      onclickView: handleClickView,
    },
    {
      _id: 2,
      image: tproduct2,
      title: "Walker Mobility",
      onclickView: handleClickView,
    },
    {
      _id: 3,
      image: tproduct3,
      title: "Wheelchair",
      onclickView: handleClickView,
    },
    {
        _id: 4,
        image: tproduct4,
        title: "Crutches",
        onclickView: handleClickView,
      },
      {
        _id: 5,
        image: tproduct5,
        title: "Defibrillation",
        onclickView: handleClickView,
      },
      {
        _id: 6,
        image: tproduct6,
        title: "Ventilator",
        onclickView: handleClickView,
      },
      {
        _id: 7,
        image: tproduct7,
        title: "Otoscope",
        onclickView: handleClickView,
      },
      {
        _id: 8,
        image: tproduct8,
        title: "Aspirator",
        onclickView: handleClickView,
      },
  ];

  return (
    <div>
      <h1 className="text-white">Home</h1>
      <ViewComponent headings={headings} datas={HomeData} />
    </div>
  );
}

export default Home;
