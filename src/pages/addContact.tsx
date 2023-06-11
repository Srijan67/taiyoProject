import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setContactDetail } from "../features/contactSlice";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [status, setStatus] = useState<string>("active");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let obj = { firstName, lastName, status };
    // You can perform additional actions with the form data here
    if (obj.firstName && obj.lastName && obj.status) {
      dispatch(setContactDetail({ firstName, lastName, status }));
      setFirstName("");
      setLastName("");
      return setStatus("active");
    }
  };
  return (
    <div className="h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="firstName" className="text-white">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="text-white">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="text-white mr-3">Status:</label>
          <label htmlFor="active" className="inline-block mr-4">
            <input
              type="radio"
              id="active"
              value="active"
              checked={status === "active"}
              onChange={() => setStatus("active")}
              className="mr-1 focus:outline-none focus:ring focus:border-indigo-500"
            />
            Active
          </label>
          <label htmlFor="inactive" className="inline-block">
            <input
              type="radio"
              id="inactive"
              value="inactive"
              checked={status === "inactive"}
              onChange={() => setStatus("inactive")}
              className="mr-1 focus:outline-none focus:ring focus:border-indigo-500"
            />
            Inactive
          </label>
        </div>

        <button
          type="submit"
          className="block w-full px-4 py-2 mt-6 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit
        </button>
        <button
          onClick={(e) => navigate("/")}
          className="block w-full px-4 py-2 mt-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default AddContact;
