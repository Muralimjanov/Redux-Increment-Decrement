import "./App.css";
import CommentsComponent from "./Components/Comments-component";
import LikeComponent from "./Components/Like-component";

const App = () => {
  return( 
    <div className="app">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://www.interfax.ru/ftproot/photos/photostory/2022/12/02/week/zax.jpg" alt="" />
            <LikeComponent/>
          </div>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  )
};

export default App;
