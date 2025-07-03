// LiveChat.js
import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "3cxchat";
    script.src = "https://1215.3cx.cloud/callus/#time"; // your real chat.js link
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const oldScript = document.getElementById("3cxchat");
      if (oldScript) {
        oldScript.remove();
      }
    };
  }, []);

  return null; // no visible UI needed
};

export default LiveChat;
