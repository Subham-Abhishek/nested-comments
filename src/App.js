import './App.css';
import { Comment } from './components/Comment';
import data from './data/comments'

function App() {
  return (
    <div>
      <Comment data = {data}/>
    </div>
  );
}

export default App;
