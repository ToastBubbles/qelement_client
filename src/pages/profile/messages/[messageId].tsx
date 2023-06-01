import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { IExtendedMessageDTO } from "@/interfaces/general";

export default function Home() {
  const router = useRouter();
  const { messageId } = router.query;

  const {
    data: msgData,
    isLoading: msgIsLoading,
    error: msgError,
  } = useQuery({
    queryKey: "individualMessage",
    queryFn: () =>
      axios.get<IExtendedMessageDTO>(
        `http://localhost:3000/message/${messageId}`
      ),
    enabled: router.isReady,
    retry: false,
  });

  if (msgError) {
    router.push("/404");
  }

  let message = msgData?.data;

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div>
          <div>subject: {message?.subject}</div>
          <div>sent: {formatDate(message?.createdAt as string)}</div>
          <div>from: {message?.senderName}</div>
          <div>to: {message?.recipientName}</div>
        </div>

        <div>{message?.body}</div>
      </div>
    </>
  );
}
function formatDate(dateStr: string) {
  var date = new Date(dateStr);

  var now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes()
  );

  let thisdate = new Date(now_utc);
  return (
    thisdate.toDateString() +
    " @ " +
    thisdate.toLocaleTimeString().replace(":00 ", " ")
  );
}
