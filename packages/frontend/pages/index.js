import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function LabIndexPage() {
  const router = useRouter();

  const authenticated = useSelector((state) => state.user.authenticated);
  const isUserAdmin = useSelector((state) => state.user.current.is_adminLab);
  const isUserMahasiswa = useSelector(
    (state) => state.user.current.is_mahasiswa
  );

  useEffect(() => {
    if (authenticated) {
      console.log("admin:", isUserAdmin, "mahasiswa:", isUserMahasiswa);
      if (isUserAdmin) router.replace("/admin");
      if (isUserMahasiswa) router.replace("/user");
    } else {
      router.replace("/login");
    }
  }, [authenticated, isUserAdmin, isUserMahasiswa]);

  return <h1>Anda sedang dialihkan. Tunggu sebentar.</h1>;
}

export default LabIndexPage;
