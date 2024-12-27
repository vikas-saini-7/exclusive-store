import { Headphones, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const Information: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Delivery Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <div className="bg-black rounded-full p-3">
              <Truck className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Customer Service Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <div className="bg-black rounded-full p-3">
              <Headphones className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back Guarantee Feature */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <div className="bg-black rounded-full p-3">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
