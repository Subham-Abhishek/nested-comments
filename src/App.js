import './App.css';
import { Comment } from './components/Comment';
import data from './data/comments'

function App() {
  return (
    <div>
      <h1>Nested Comments</h1>
      <Comment data = {data}/>
    </div>
  );
}

export default App;
