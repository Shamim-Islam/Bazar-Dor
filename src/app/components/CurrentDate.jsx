"use client";

import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const formattedDate = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      }).format(new Date());

      setDate(formattedDate);
    };

    updateDate();

    const interval = setInterval(updateDate, 60_000);

    return () => clearInterval(interval);
  }, []);

  return <>{date || "তারিখ লোড হচ্ছে..."}</>;
}
