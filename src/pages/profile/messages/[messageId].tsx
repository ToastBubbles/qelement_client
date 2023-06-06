import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import React, { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { IExtendedMessageDTO } from "@/interfaces/general";
import { jwtContext } from "@/jwtContext";
import { AppContext } from "@/context/context";

export default function Home() {
  const router = useRouter();
  const { messageId } = router.query;

  // const [userId, setUserId] = useState<number>(-1);
  const [hasMarkedRead, setHasMarkedRead] = useState<boolean>(false);
  // const [message, setMessage] = useState<IExtendedMessageDTO>();

  const {
    state: {
      jwt: { token, payload },
    },
    dispatch,
  } = useContext(AppContext);

  const {
    data: msgData,
    isLoading: msgIsLoading,
    error: msgError,
  } = useQuery({
    queryKey: "individualMessage",
    queryFn: () => {
      console.log("sending message with id of", messageId);
      return axios.get<IExtendedMessageDTO>(
        `http://localhost:3000/message/${messageId}`
      );
    },
    enabled: router.isReady,
    retry: true,
  });

  // const msgMutation = useMutation({
  //   mutationFn: () =>
  //     axios.post<null>(`http://localhost:3000/message/${message?.id}`),
  //   onSuccess: () => {},
  // });

  if (msgError) {
    router.push("/404");
  }
  // if (!msgIsLoading) {
  //   setMessage(msgData?.data);
  // }

  /// return me
  // if (!!msgData?.data && !!payload.id) {
  //   if (
  //     !msgData?.data.read &&
  //     msgData?.data.recipientId == payload.id &&
  //     !hasMarkedRead
  //   ) {
  //     msgMutation.mutate();
  //     setHasMarkedRead(true);
  //   }
  // }

  // useEffect(() => {
  //   console.log("setting message");
  //   console.log("message:", msgData?.data, typeof msgData?.data);

  //   setMessage(msgData?.data);
  // }, [!!msgData?.data]);

  return msgIsLoading ? (
    <p>loading...</p>
  ) : (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div>
          <div>subject: {msgData?.data?.subject}</div>
          <div>sent: {formatDate(msgData?.data?.createdAt as string)}</div>
          <div>from: {msgData?.data?.senderName}</div>
          <div>to: {msgData?.data?.recipientName}</div>
        </div>
        <div>{msgData?.data?.body}</div>
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
