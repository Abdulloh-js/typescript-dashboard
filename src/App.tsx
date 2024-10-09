import { Route, Routes } from 'react-router-dom';
import Admin from './Component/Admin';

import './index.css';
import CaravanComponent from './Component/Folders/Caravan';
import TuningComponent from './Component/Folders/Tuning';
import UsedComponent from './Component/Folders/Used';
import CampingComponent from './Component/Folders/Camping';
import { campcarTuning,  CampingPlaces, tuningCar} from './Component/AllMocks';
import { CampcarUsedCar } from './Component/UsedMock';
import { campcarCampingPlace } from './Component/mockdata/mockdatacamping';



function App() {


const Campcar = {
  Maindatas: [ {
      id: 1,
      car: {
          img: "https://pngimg.com/d/caravan_PNG36.png",
          CarName: "furgon C72",
          BrandName: "Hymer",
          Cost: "98,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:2,
      car: {
          img: "https://www.knaus.com.au/images/ktg-knaus-2016-2017-skywave-650-FS-03.png", 
          CarName: "C53Fa",
          BrandName: "Bürstner",
          Cost: "88,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:3,
      car: {
          img: "https://searlesrvcentre.com.au/wp-content/uploads/2021/09/Avan-Ovation-B-Class-Motorhome.jpg",
          CarName: "Happy Camper",
          BrandName: "Carado",
          Cost: "133,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:4,
      car: {
          img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlM19waG90b19vZl9yZWNyZWF0aW9uYWxfdmVoaWNsZV9fc2lkZV92ZWl3X19pc29sYV84NTUzZTA5OC03MTU0LTQ2OGEtOTYwOC0wZDYyYzRmZjMwYjBfMS5qcGc.jpg",
          CarName: "Rolling Retreat",
          BrandName: "Winnebago Industries",
          Cost: "93,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:5,
      car: {
          img: "https://media.istockphoto.com/id/186567752/photo/large-white-motorhome-on-white-background.jpg?s=612x612&w=0&k=20&c=kDxltLkWV9wqHVj5G3TC6XvmASr4u1ruCRDqSkMldTw=",
          CarName: "The Long Haul",
          BrandName: "Laika",
          Cost: "123,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:6,
      car: {
          img: "https://5.imimg.com/data5/YQ/ZB/LH/SELLER-81391014/recreation-vehicle-vanity-van-motor-home-rv-caravan-mobile-home-luxury-vehicle-500x500.jpg",
          CarName: "Trailblazer",
          BrandName: "Auto-Sleepers",
          Cost: "88,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:7,
      car: {
          img: "https://editorial.pxcrush.net/caravancampingsales/general/editorial/ge5066064190954211590.jpg",
          CarName: "Sunset Chaser",
          BrandName: "Chausson",
          Cost: "77,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:8,
      car: {
          img: "https://sc04.alicdn.com/kf/Hdcade159f3f149cbbbbbbfd363a8612ar.jpg",
          CarName: "Class-C",

          BrandName: "Entegra Coach, Inc",
          Cost: "160,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:9,
      car: {
          img: "https://pngimg.com/d/caravan_PNG57.png",
          CarName: "Camper Cruise-ader",
          BrandName: "Airstream",
          Cost: "130,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:10,
      car: {
          img: "https://pngimg.com/uploads/caravan/small/caravan_PNG96.png",
          CarName: "Nomad's Nest",
          BrandName: "Dethleffs",
          Cost: "95,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:11,
      car: {
          img: "https://media.autoexpress.co.uk/image/private/s--Rlwv_IH9--/f_auto,t_card-mobile@1/v1651072273/autoexpress/2022/04/Chausson-motorhome_xscckk.jpg",
          CarName: "Wanderlust Wagon",
          BrandName: "Carthago",
          Cost: "76,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:12,
      car: {
          img: "https://d38b8me95wjkbc.cloudfront.net/uploads/rv/cover_image/45149/rv_list_card_zefiro-sport-offside-1832.jpeg",
          CarName: "Cabin Fever",
          BrandName: "Heartland",
          Cost: "59,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:13,
      car: {
          img: "https://5.imimg.com/data5/NY/NG/ZA/SELLER-56701174/recreation-vehicle-vanity-van-motor-home-rv-caravan-mobile-home-luxury-vehicle-500x500.jpg",
          CarName: "Cabin Feverr",
          BrandName: "hor Motor Coach",
          Cost: "53,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:14,
      car: {
          img: "https://p.globalsources.com/IMAGES/PDT/B1197696118/Caravans-travel-trailers.jpg",
          CarName: "Freedom Finderr",
          BrandName: "Blucamp",
          Cost: "90,100,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:15,
      car: {
          img: "https://pngimg.com/d/caravan_PNG46.png",
          CarName: "Name of the car",
          BrandName: "The Open Roadster",
          Cost: "89,000,000",
          company: "Aidal company",
          place: "12",
          license: "License type",
          info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
          ID: "281",
          Dates: "22.02.2022",
          Viewed: "395"
      }
  },
  {
      id:16,
      car: {

        img: "https://m.media-amazon.com/images/I/41D8HUVoDjL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
        CarName: "Fifth Wheels ",
        BrandName: "Forest River",
        Cost: "180,000,000",
        company: "Aidal company",
        place: "12",
        license: "License type",
        info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        ID: "281",
        Dates: "22.02.2022",
        Viewed: "395"
    }
},
{
    id:17,
    car: {
        img: "https://media.istockphoto.com/id/1279010032/photo/modern-rv-isolated-on-white.jpg?s=612x612&w=0&k=20&c=siuTbxKcMgg1WlJxXFJUYp07Maskf1Ld7DPVm2cnJK8=",
        CarName: "w 218",
        BrandName: "Adria",
        Cost: "66,999,999",
        company: "Aidal company",
        place: "12",
        license: "License type",
        info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        ID: "281",
        Dates: "22.02.2022",
        Viewed: "395"
    }
},
{
    id:18,
    car: {
        img: "https://s.alicdn.com/@sc04/kf/He1b330cd4d194365b8626683f1f68b5bW.jpg_300x300.jpg",
        CarName: "A class w 200",
        BrandName: "Benimar",
        Cost: "72,900,99",
        company: "Aidal company",
        place: "12",
        license: "License type",
        info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        ID: "281",
        Dates: "22.02.2022",
        Viewed: "395"
    }
},
{
    id:19,
    car: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZkjDE8iJuQChEpSjruPxlme1Lo8ePK9kXP389vQ_Yu9spj5mIM7vWwlzCtnYNLG0f1I&usqp=CAU",
        CarName: "D 320",
        BrandName: "Elddis",
        Cost: "92,000,000",
        company: "Aidal company",
        place: "12",
        license: "License type",
        info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        ID: "281",
        Dates: "22.02.2022",
        Viewed: "395"
    }
},
{
    id:20,
    car: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKUUETwBz_JTIELLZvq8Hb_ozF9UP2IMX6FhqMB2ocVjm8WGyN0wHkCkrVkY-EeVGogE&usqp=CAU",
        CarName: " Amg cls 53",
        BrandName: "ayco, Inc",
        Cost: "114,000,000",
        company: "Aidal company",
        place: "12",
        license: "License type",
        info: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        ID: "281",
        Dates: "22.02.2022",
        Viewed: "395"
    }
},


]
}

  
  return (
    <div className="App">
 
      {/* <Admin datas={Campcar.Maindatas}/> */}
      <Routes>
      <Route path="/motor" element={<Admin datas={Campcar.Maindatas} />}
        /> 
         <Route path="/" element={<Admin datas={Campcar.Maindatas} />}
        /> 
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/tuning" element={<TuningComponent tuning={tuningCar.tuningCon} />} />
        <Route path="/used" element={<UsedComponent maindata={CampcarUsedCar.maindata}/>} />
        <Route path="/camping" element={<CampingComponent camping={campcarCampingPlace.maindata} />} />
        </Routes>
    </div>
  );
}

export default App;
