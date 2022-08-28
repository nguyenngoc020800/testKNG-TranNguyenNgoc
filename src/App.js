import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./modules/home/pages/Form";
import UpdateForm from "./modules/home/pages/UpdateForm";
import UserList from "./modules/home/pages/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/update/:ID" element={<UpdateForm />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
