import React ,{useState} from 'react';
import './App.css';

function App() {
  //ndF2dFSdAiFHdTjBLG9fGYL3bLzR-iS4OcIEWrcrrYM  Access Key
  //UYidaMBLCN6ONE3Q_Sr8UrAsaaMOIyj5ZDMkbIHyJzw  secret key
  //https://api.unsplash.com/photos/?client_id=ndF2dFSdAiFHdTjBLG9fGYL3bLzR-iS4OcIEWrcrrYM
  ///search/photos
  //https://api.unsplash.com/photos/search/photos?client_id=ndF2dFSdAiFHdTjBLG9fGYL3bLzR-iS4OcIEWrcrrYM
  const [searchValue,setsearchValue] = useState("");
  const [result,setresult]=useState([]);
  const imgPerPage =100;
  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=ndF2dFSdAiFHdTjBLG9fGYL3bLzR-iS4OcIEWrcrrYM&query=${searchValue}&per_page=${imgPerPage}`)
    .then(response =>response.json())
    .then(data=>{
      setresult(data.results)
      console.log(data.results)})
  }
  return (
    <div className="App">
       <div className='my-div'>
        <span>Search </span>
        <input 
          type="text"
          style={{width:"60%" ,height:"30%",size:"20",padding:"5px"}} 
          value={searchValue}
          onChange = {(e)=>setsearchValue(e.target.value)}

        />
        <button className='submitbtn' onClick={()=>fetchImages()}>Send</button>
       </div>
       <div className='gallery'>
        {
          result.map((item)=>{
            return <img className='item' key={item.id} src = {item.urls.regular}  />;
          })
        }
       </div>
    </div>
  );
}

export default App;
