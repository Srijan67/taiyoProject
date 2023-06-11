import React, { useState } from "react";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./utils/store";
import persistStore from "redux-persist/es/persistStore";
import { NavLink, Route, Routes } from "react-router-dom";
import AllContacts from "./pages/allContacts";
import AddContact from "./pages/addContact";
import EditContact from "./pages/editContact";
import CovidChart from "./pages/covidChart";

function App() {
  let persistor = persistStore(store);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="flex flex-row h-full min-h-screen overflow-x-hidden">
          <div className="relative h-screen bg-blue-900 z-50">
            <button
              className={`${
                !sidebarVisible ? "left-0" : "left-32"
              } absolute top-0 p-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg text-xl transition-left duration-300`}
              onClick={toggleSidebar}
            >
              {sidebarVisible ? "-" : "+"}
            </button>

            <div
              className={`${
                sidebarVisible ? "left-0" : "-left-32"
              } absolute h-full bg-blue-900 w-32 transition-left duration-300`}
            >
              <nav className="flex flex-col h-full">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                      : isActive
                      ? "p-4 bg-indigo-600 text-white"
                      : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  All Contacts
                </NavLink>
                <NavLink
                  to="/add"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                      : isActive
                      ? "p-4 bg-indigo-600 text-white"
                      : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  Add Contact
                </NavLink>
                <NavLink
                  to="/covid"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                      : isActive
                      ? "p-4 bg-indigo-600 text-white"
                      : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  Covid Chart
                </NavLink>
              </nav>
            </div>
          </div>

          <div className="bg-green-950 flex-1">
            <Routes>
              <Route path="/" element={<AllContacts />} />
              <Route path="/add" element={<AddContact />} />
              <Route path="/edit/:id" element={<EditContact />} />
              <Route path="/covid" element={<CovidChart />} />
            </Routes>
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
