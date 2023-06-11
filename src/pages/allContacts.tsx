import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { delContactDetail } from "../features/contactSlice";

const AllContacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contact);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(contacts, "this is contact");
  }, []);

  const handleAddCard = () => {
    // Handle adding card logic
    navigate("/add");
    console.log("Add Card clicked");
  };

  return (
    <div className="p-10">
      <div className="w-full flex justify-center items-center">
        <button
          className="my-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={handleAddCard}
        >
          Add Card
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {contacts.length > 0 ? (
          contacts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <div>
                <p className="text-lg font-semibold">
                  {item.firstName} {item.lastName}
                </p>
                <p className="text-gray-500">{item.status}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    navigate(`/edit/${index}`);
                  }}
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(delContactDetail(index));
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="w-96 bg-red-500">
            <p className="text-gray-500 text-center">No data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllContacts;
