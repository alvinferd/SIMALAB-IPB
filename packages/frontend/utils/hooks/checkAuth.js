import { useEffect } from "react";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";

export default async function CheckAuth() {
  const router = useRouter();
  const authenticated = useSelector((state) => state.user.authenticated);

  useEffect(() => {
    if (!authenticated) router.replace("/login");
  }, [authenticated]);
}
