import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4 text-gray-700">
        We would love to hear from you!
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Feel free to reach out to us for any queries or feedback.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Our team is here to assist you with any questions you may have.
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
