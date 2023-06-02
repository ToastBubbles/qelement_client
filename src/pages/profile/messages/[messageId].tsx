import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { IExtendedMessageDTO } from "@/interfaces/general";
import { jwtContext } from "@/jwtContext";

export default function Home() {
  const router = useRouter();
  const { messageId } = router.query;
  const [userId, setUserId] = useState<number>(-1);
  const [hasMarkedRead, setHasMarkedRead] = useState<boolean>(false);

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
  const msgMutation = useMutation({
    mutationFn: () =>
      axios.post<null>(`http://localhost:3000/message/${message?.id}`),
    onSuccess: () => {},
  });

  if (msgError) {
    router.push("/404");
  }

  let message = msgData?.data;

  if (message && userId != 1) {
    if (!message.read && message.recipientId == userId && !hasMarkedRead) {
      msgMutation.mutate();
      setHasMarkedRead(true);
    }
  }

  return (
    <>
      <Navbar />
      <jwtContext.Consumer>
        {(jwt) => {
          if (jwt != null) {
            setUserId(jwt?.id as number);
            return (
              <div className="page-wrapper">
                <div>
                  <div>subject: {message?.subject}</div>
                  <div>sent: {formatDate(message?.createdAt as string)}</div>
                  <div>from: {message?.senderName}</div>
                  <div>to: {message?.recipientName}</div>
                </div>

                <div>{message?.body}</div>
              </div>
            );
          }
        }}
      </jwtContext.Consumer>
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
