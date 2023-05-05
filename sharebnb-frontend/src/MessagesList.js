import MessageCard from "./MessageCard";
function MessagesList({ conversations }) {
  return (
    <div>
      <h1>Messages</h1>
      {conversations.map((c) => (
        <MessageCard key={c.id} message={c} />
      ))}
    </div>
  );
}
export default MessagesList;
