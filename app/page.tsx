"use client";

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface userData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    if (WebApp?.initDataUnsafe?.user) {
      setUserData(WebApp?.initDataUnsafe?.user as userData);
    }
  }, []);

  return (
    <div className='p-10'>
      {userData ? (
        <div>
          <span>User Data</span>
        </div>
      ) : (
        <div>
          <span>User data not found</span>
        </div>
      )}
    </div>
  );
}
