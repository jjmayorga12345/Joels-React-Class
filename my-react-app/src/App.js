import { useState } from 'react';
import './App.css';
import FetchingData from './Components/FetchingData';
import PostingData  from './Components/PostingData';

function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);

  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
    <div className="container">
      <button onClick={() => handleShowFetchDataDemo()} className="button">
        Fetching Data Demo
      </button>
      <button onClick={() => handleShowPostDataDemo()} className="button">
        Posting Data Demo
      </button>
      <hr />
      {showFetchData ? <FetchingData /> : <PostingData />}
    </div>
  );
}

export default App;


// week3 down here vvv
// import './App.css';
// import Todo from './Todo';
// import { Modal, Joel } from "./Modal";
// import { BasicForm } from './BasicForm';
// import MyAwesomeComponent from './week3mini/MyAwesomeComponent';

// function App() {
//   return (
//     <div className="todo-container">
//       <div className="card">
//         <Todo title="Learn React" />
//         <Todo title="Practice React" />
//         <Todo title="Learn React part 2" />
//       </div>
//       <BasicForm />
//       <MyAwesomeComponent />
//     </div>
//   );
// }

// export default App;
