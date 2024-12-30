import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-8 rounded-lg">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4 text-gray-700">
        Welcome to our exclusive store!
      </p>
      <p className="text-lg mb-4 text-gray-700">
        We offer a wide range of products to cater to your needs.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Our mission is to provide the best quality products at affordable
        prices.
      </p>
      <p className="text-lg text-gray-700">
        Contact us at:{" "}
        <a
          href="mailto:contact@exclusivestore.com"
          className="text-blue-500 underline"
        >
          contact@exclusivestore.com
        </a>
      </p>
    </div>
  );
};

export default page;
