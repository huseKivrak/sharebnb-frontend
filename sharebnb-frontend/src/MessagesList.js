import MessageCard from "./MessageCard";
import { useState, useEffect } from "react";
import ShareBnBApi from "./api";
/** MessagesList
 *
 * Props:
 * - filter
 *
 * States:
 * - None
 *
 * App -> RoutesList -> MessagesList -> MessageCard
 */
function MessagesList({ filter = null }) {
  console.debug("MessagesList");
  const [messages, setMessages] = useState([]);

  useEffect(function getAndSetMessagesOnMount() {
    console.debug("MessagesList effect");

    async function getAndSetMessages() {
      console.debug("MessagesList api call");
      try {
        const msgs = await ShareBnBApi.getMessages();
        setMessages(msgs);
      } catch (error) {
        console.error(error);
      }

    }
    getAndSetMessages();
  }, []);


  return (
    <div>
      <h1>Messages</h1>
      <ul>
        <li>
          {messages.map((c) => (
            <MessageCard key={c.id} message={c} />
          ))}
        </li>
      </ul>
    </div>
  );
}
export default MessagesList;
