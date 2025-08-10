import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Create the <call-us-selector> tag
    const chatTag = document.createElement("call-us-selector");
    chatTag.setAttribute("phonesystem-url", "https://1215.3cx.cloud");
    chatTag.setAttribute("party", "LiveChat456003");

    // Append it to the body (or a div if you want to control layout)
    document.body.appendChild(chatTag);

    // Create the script tag
    const script = document.createElement("script");
    script.id = "tcx-callus-js";
    script.src =
      "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
    script.defer = true;
    script.charset = "utf-8";

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      chatTag.remove();
      script.remove();
    };
  }, []);

  return null; // Nothing rendered by React; DOM handles it
};

export default LiveChat;
