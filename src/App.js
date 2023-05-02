import Carousel from "./Carousel";

const catalogData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
    title: "Chicago",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=956&q=80",
    title: "New Jersy",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Maldives",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
    title: "Sydney",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80",
    title: "Malaysia",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Brazil",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80",
    title: "Rome",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80",
    title: "Paris",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel commodi
  fuga natus mollitia assumenda quia molestias maxime magni placeat doloremque
  quo quas similique, eveniet iure magnam laborum fugit eligendi eos
  aspernatur voluptatibus qui ad cumque porro! Quae distinctio quisquam, id
  harum rem incidunt impedit magni nostrum. Quidem eos impedit quae,
  consequuntur error id explicabo, vero, accusamus fuga possimus dolorum.`,
  },
];

function App() {
  return (
    <div>
      <Carousel data={catalogData} />
    </div>
  );
}

export default App;
