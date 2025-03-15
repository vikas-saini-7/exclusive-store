import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { deleteAddress, fetchAddresses } from "@/store/actions/addressActions";
import AddAddress from "./AddAddress";

// const addresses = [
//   {
//     id: 1,
//     userId: 101,
//     name: "John Doe",
//     street: "123 Maple Street",
//     city: "Los Angeles",
//     state: "CA",
//     zipCode: "90001",
//     country: "USA",
//     isDefault: true,
//     phone: "+1-555-123-4567",
//     email: "john.doe@example.com",
//     orders: [
//       {
//         id: 5001,
//         totalAmount: 250.75,
//         status: "Shipped",
//       },
//     ],
//   },
//   {
//     id: 2,
//     userId: 102,
//     name: "Jane Smith",
//     street: "456 Oak Avenue",
//     city: "New York",
//     state: "NY",
//     zipCode: "10001",
//     country: "USA",
//     isDefault: false,
//     phone: "+1-555-987-6543",
//     email: "jane.smith@example.com",
//     orders: [
//       {
//         id: 5002,
//         totalAmount: 180.5,
//         status: "Processing",
//       },
//     ],
//   },
// ];

const AddressesComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const addresses = useSelector((state: RootState) => state.address.addresses);

  const handleFetchAddresses = () => {
    if (userId) {
      dispatch(fetchAddresses(userId));
    }
  };

  useEffect(() => {
    handleFetchAddresses();
  }, [userId]);

  const handleDeleteAddress = (id: number) => {
    dispatch(deleteAddress(id));
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold">Deliver to this Address</h1>
        <div className="mb-12">
          {addresses?.map((address, idx) => (
            <div
              key={idx}
              className="flex relative items-center space-x-4 my-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-2 right-3 flex space-x-4">
                <p className="text-xs text-gray-500">
                  {address.isDefault ? "default" : ""}
                </p>
                <p className="text-xs text-blue-500 cursor-pointer">EDIT</p>
                <p
                  className="text-xs text-red-500 cursor-pointer"
                  onClick={() => handleDeleteAddress(address.id)}
                >
                  DELETE
                </p>
              </div>
              <Checkbox
                id={`address-${address.id}`}
                checked={address.isDefault ? true : false}
              />
              <Label
                htmlFor={`address-${address.id}`}
                className="flex-grow cursor-pointer"
              >
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <p className="font-medium text-lg">{address.name}</p>
                    <p className="text-gray-500">{address.phone}</p>
                    <p className="text-gray-500">{address.email}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <p>{address.street}</p>
                    <p>
                      {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p>{address.country}</p>
                  </div>
                </div>
              </Label>
            </div>
          ))}
        </div>
      </div>
      <AddAddress />
    </div>
  );
};

export default AddressesComponent;
