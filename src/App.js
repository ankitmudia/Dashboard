import { Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const defaultPage = dummyData[0].name;
  return (
    // <div id="main">
      <Sidebar>
        <div
          id="main"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Header />
          <div style={{ flex: 1, overflow: "auto" }}>
            <Routes>
              <Route path="/" element={<DynamicItem page={defaultPage} />} />
              {dummyData &&
                dummyData.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    element={<DynamicItem page={item.name} />}
                  />
                ))}
            </Routes>
          </div>
        </div>
      </Sidebar>
    // </div>
  );
}

export default App;
