import { useEffect, useState } from "react";
import { api } from "./api/apiResource";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await api.get("/lists");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [tasks.length]);

  const handleAdd = async (value) => {
    const data = {
      id: Math.floor(Math.random() * 100),
      task: value,
      complete: false,
    };

    const res = await api.post("/lists", data);
    setTasks((prev) => [...prev, res.data]);
  };

  const handleDelete = async (id) => {
    await api.delete(`/lists/${id}`);
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdate = async (id, complete) => {
    await api.patch(`/lists/${id}`, { complete });
    setTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, complete } : item))
    );
  };

  return (
    <div className="container-md mt-4">
      <Form handleAdd={handleAdd} />
      <List
        data={tasks}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
