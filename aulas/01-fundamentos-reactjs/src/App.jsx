import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alan Felipe"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis accusantium, aliquid cum veritatis doloribus provident nostrum illum, omnis, eligendi maiores nam enim molestiae quibusdam? Autem vero doloribus assumenda harum ipsum."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
