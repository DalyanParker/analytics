import { SessionEventClient } from "@/clients/sessionEventClient";

interface Props {
  elementId: string;
  text: string;
}

export default function Button({ elementId, text }: Props) {
  const sessionEventClient = new SessionEventClient();

  const handleClick = () =>
    sessionEventClient.createSessionEvent({
      sessionEventType: "BUTTON_CLICK",
      elementId,
    });

  return (
    <button
      onClick={(_) => handleClick()}
      style={{
        marginTop: 8,
        backgroundColor: "rgb(245, 73, 102)",
        color: "#FFF",
        padding: "4px 8px",
        borderRadius: 8,
      }}
    >
      {text}
    </button>
  );
}
