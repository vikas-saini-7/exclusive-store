import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addAddress } from "@/store/actions/addressActions";

const AddAddress = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);

  const [name, setName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isDefault, setIsDefault] = useState<boolean>(false);

  const handleAddAddress = () => {
    // console.log({
    //   name,
    //   street,
    //   city,
    //   state,
    //   zipCode,
    //   country,
    //   phone,
    //   email,
    //   isDefault,
    // });
    if (userId) {
      dispatch(
        addAddress({
          userId,
          name,
          street,
          city,
          state,
          zipCode,
          country,
          phone,
          email,
          isDefault,
        })
      );
    }
  };
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">New Address</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            required
            className="w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="street">
            Street Address<span className="text-red-500">*</span>
          </Label>
          <Input
            id="street"
            required
            className="w-full"
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="city">
            City<span className="text-red-500">*</span>
          </Label>
          <Input
            id="city"
            required
            className="w-full"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="state">
            State<span className="text-red-500">*</span>
          </Label>
          <Input
            id="state"
            required
            className="w-full"
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="zipCode">
            Zip Code<span className="text-red-500">*</span>
          </Label>
          <Input
            id="zipCode"
            required
            className="w-full"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="country">
            Country<span className="text-red-500">*</span>
          </Label>
          <Input
            id="country"
            required
            className="w-full"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="phone">
            Phone Number<span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            className="w-full"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="email">
            Email Address<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            className="w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="saveInfo"
            checked={isDefault}
            onCheckedChange={(checked: boolean) => setIsDefault(checked)}
          />
          <Label htmlFor="saveInfo">
            Set this address as your default address
          </Label>
        </div>
      </div>
      <Button onClick={handleAddAddress} className="bg-red-500">
        Save Address
      </Button>
    </div>
  );
};

export default AddAddress;
