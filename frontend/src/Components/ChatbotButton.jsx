import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="
          fixed
          bottom-5
          right-5
          w-12
          h-12
          rounded-full
          bg-blue-500
          text-white
          border-none
          cursor-pointer
          z-50
          flex
          items-center
          justify-center
        "
      >
        💬
      </button>

      {/* Chatbot Iframe */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-20
            right-5
            w-[350px]
            h-[500px]
            border
            border-gray-300
            rounded-lg
            overflow-hidden
            z-50
            bg-white
          "
        >
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=fa0aeb50-4f0a-45aa-8ce7-c6c934a7e3e4"
            title="Chatbot"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotButton;
