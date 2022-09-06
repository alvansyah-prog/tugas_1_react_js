import React, {Component} from "react";
import MenuKotak from "./Page/MenuKotak";
import MenuProduk from "./Page/MenuProduct";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuUtama from "./Page/MenuUtama";

//Function Component Header
const Header = () =>{
return (

  <div>
  <h1> Ini Halaman Untuk Header </h1>
  </div>
);
};


//Function Component Footer
const Footer =() => {
  return(

    <div>
    <h1> Ini Halaman Untuk Footer </h1>
    </div>
  );
};

class App extends Component {
  render(){
    return(

      <div >
        <Header/>
        <MenuUtama/>
        <MenuProduk/>
        <MenuKotak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

export default App;
