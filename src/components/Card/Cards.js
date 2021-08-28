import React,{useEffect,useState} from "react";
import "./Cards.css";
import axios from "axios";
const Cards = () => {


    const [state, setstate] = useState([])

    useEffect(()=>{
      fetchApi();
    },[])
  
  
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  
    const fetchApi = async () => {
      const response = await axios.get(url);
      setstate(response.data.meals);
      try {
      }
       catch (error) {
         console.log(error);
       }
    };
  
  console.log(state);


  const list =  state.map((obj)=>{
  
return  <div className="con">
    <div className="row">
      <div class="card">
        <div class="card-image">
          <img
            src={obj.strMealThumb}
            alt=""
            width="100%"
          />
        </div>
        <div class="card-body">
          <h3>{obj.strMeal}</h3>
        
        </div>
        <div class="btn">
          <button>Add to card</button>
        </div>
      </div>

      </div>
</div>







  })
  

  
  return (
    <div className="card__container">

  
    {list}
     
    </div>
  );
};

export default Cards;
