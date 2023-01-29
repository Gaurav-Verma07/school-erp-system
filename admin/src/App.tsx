import { AppShell } from "@mantine/core";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddAttendence from "./components/Attendence/AddAttendence";
import { ViewAttendence } from "./components/Attendence/ViewAttendence";
import Dashboard from "./components/Dashboard/Dashboard";
import { NavbarNested } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppShell
          padding="md"
          navbar={<NavbarNested />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/attendence/view" element={<ViewAttendence />}></Route>
            <Route path="/attendence/add" element={<AddAttendence />}></Route>
          </Routes>
        </AppShell>
      </BrowserRouter>
    </div>
  );
}

export default App;
