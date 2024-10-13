import FetchComponent from "./components/FetchComponent"
import Spinner from "./components/spinner"

function App() {

  const PostsWithLoading = Spinner(FetchComponent);

  return (
    <main>
      <h1 className="p-5 text-center">Here some posts:</h1>
      <PostsWithLoading />
    </main>
  )
}

export default App
