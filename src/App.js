import './App.css';
import { Comment } from './components/Comment';
import data from './data/comments'

function App() {
  return (
    <div>
      <h1>Nested Comments</h1>
      {
        data.map((e) => 
          <Comment data = {e.replies} user = {e} key = {e.id} />
        )
      }
    </div>
  );
}

export default App;
