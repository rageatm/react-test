import {
  ItemType,
  ListType,
  SearchType,
  StorageStateReturnType,
} from "app-type";
import React from "react";

const useStorageState = (
  key: string,
  initialState: string
): StorageStateReturnType => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectId: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectId: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = useStorageState("search", "React");
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }: SearchType) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
    <p>
      Searching for <strong>{search}</strong>.
    </p>
  </div>
);

const List = ({ list }: ListType) => (
  <ul>
    {list.map(({ objectId, ...item }) => (
      <Item key={objectId} {...item} />
    ))}
  </ul>
);

const Item = ({
  title,
  url,
  author,
  num_comments,
  points,
}: Omit<ItemType, "objectId">) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

export default App;
