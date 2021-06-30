import React, { useState } from 'react';
import {Card,CardGroup} from "react-bootstrap" 
import 'bootstrap/dist/css/bootstrap.min.css';   
import './App.css';
 

const item = [
  {  
    name: "Logitech G432", 
    price: "1696", 
    img: "https://images-na.ssl-images-amazon.com/images/I/61j6ey6mBpL._AC_SL1024_.jpg",  
    link: "https://www.amazon.com/Logitech-Surround-Gaming-Headset-Leatherette/dp/B07MRMHML9/ref=sr_1_6?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-6",
  },
  {  
    name: "bopmen Computer Headset with Microphone", 
    price: "2970", 
    img: "https://images-na.ssl-images-amazon.com/images/I/61tMp1SeacL._AC_SL1000_.jpg", 
    link: "https://www.amazon.com/bopmen-Computer-Headset-Microphone-Line/dp/B088BVFZG8/ref=sr_1_7_sspa?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-7-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOFM5T1pPTkVLVU8xJmVuY3J5cHRlZElkPUEwMTYyMjg5MUFTOVY0QUZFSEVMRCZlbmNyeXB0ZWRBZElkPUEwNzYzNzA2M01XRTdYTDU1TjBHVSZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", 
  },
  {  
    name: "Razer Kraken Tournament Edition THX 7.1", 
    price: "5431", 
    img: "https://images-na.ssl-images-amazon.com/images/I/61dwuOuWXmL._AC_SL1440_.jpg",  
    link: "https://www.amazon.com/Razer-Kraken-Tournament-Gel-Infused-Cushions/dp/B07G5TP4BN/ref=sr_1_8?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-8",
  },
  {  
    name: "Razer BlackShark V2 Pro", 
    price: "12306", 
    img: "https://images-na.ssl-images-amazon.com/images/I/51SyhNOU3OL._AC_SL1500_.jpg",  
    link: "https://www.amazon.com/Razer-BlackShark-Wireless-Gaming-Headset/dp/B08FQG96RP/ref=sr_1_9?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-9",
  },
  {  
    name: "Gaming Headset for PS5", 
    price: "5431", 
    img: "https://images-na.ssl-images-amazon.com/images/I/7143AF1wYIS._AC_SL1500_.jpg", 
    link: "https://www.amazon.com/Gaming-Headset-Cancelling-Suround-Headphones/dp/B095SRM11G/ref=sr_1_10?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-10", 
  },
  {  
    name: "SteelSeries Arctis 3", 
    price: "5431", 
    img: "https://images-na.ssl-images-amazon.com/images/I/81FpaX4SvWL._AC_SL1500_.jpg",  
    link: "https://www.amazon.com/SteelSeries-All-Platform-Headset-PlayStation-Nintendo/dp/B07G12Z1HR/ref=sr_1_11?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-11",
  },
  {  
    name: "Turtle Beach Stealth 600", 
    price: "8402", 
    img: "https://images-na.ssl-images-amazon.com/images/I/61gsYpuZecL._SL1224_.jpg", 
    link: "https://www.amazon.com/Stealth-Wireless-Gaming-Headset-PlayStation-Console/dp/B08D44WZTS/ref=sr_1_12_sspa?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-12-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOFM5T1pPTkVLVU8xJmVuY3J5cHRlZElkPUEwMTYyMjg5MUFTOVY0QUZFSEVMRCZlbmNyeXB0ZWRBZElkPUExMDI3ODc0M1IxVFNIVDdIM1AySiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", 
  }, 
  {  
    name: "JBL Quantum 300", 
    price: "8402", 
    img: "https://images-na.ssl-images-amazon.com/images/I/81FLxEccLVL._AC_SL1500_.jpg",  
    link: "https://www.amazon.com/JBL-Quantum-300-Over-Ear-Headphones/dp/B084D5QDXN/ref=sr_1_13?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-13",
  }, 
  {  
    name: "Razer Kraken Gaming", 
    price: "5856", 
    img: "https://images-na.ssl-images-amazon.com/images/I/71zI-B31vrL._AC_SL1500_.jpg",  
    link: "https://www.amazon.com/Razer-Kraken-Gaming-Headset-2019/dp/B07QBVWFGC/ref=sr_1_14?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-14",
  }, 
  {  
    name: "Jeecoo Xiberia USB Pro", 
    price: "1527", 
    img: "https://images-na.ssl-images-amazon.com/images/I/615o1%2BWB5IL._AC_SL1000_.jpg",  
    link: "https://www.amazon.com/Jeecoo-Headset-Surround-Headphones-Cancelling/dp/B07TC8J6HK/ref=sr_1_15?dchild=1&keywords=gaming+headsets&pd_rd_r=5df8a1c4-c978-4988-abb6-4709dec3d0ce&pd_rd_w=S9A95&pd_rd_wg=LS81z&pf_rd_p=5811f97a-f703-4231-aa5f-c344167bfe13&pf_rd_r=YRBBZYTPBES9N7VYKHWV&qid=1625042228&sr=8-15",
  },
]; 

export default function App() { 

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = item.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">  
      
        <div className="Title"> 
              <h1>HEADPHONE</h1>
        </div> 

        <div className="Input">
           
              <input className="SearchBar"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              /> 
          
        </div> 
       
        <div className="Cardgroup">
            <ul> 
              <CardGroup className="Cards"> 
                {searchResults.map(item => (
                  
                    <Card className = "C">
                      <a href={item.link}><Card.Img variant="top" src={item.img} /></a>
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">BDT {item.price} /=</small>
                        </Card.Footer>
                    </Card> 
                  
                ))} 
              </CardGroup>  
            </ul> 
         </div>  
          
         <footer className="Footer"> 
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.amazon.com/"> Amazon.com </a>
         </footer> 
     
    </div>  
    

  );
}