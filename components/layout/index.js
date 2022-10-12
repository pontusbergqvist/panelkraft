import { useEffect, useState } from "react";
import Nav from "./nav/nav";
import Footer from "./footer";
import useWindow from "../../hooks/useWindow";
import { useRouter } from "next/router";

const Layout = ({ route, children }) => {
  const [active, setActive] = useState(false);
  const mobile = useWindow();
  const router = useRouter();

  useEffect(() => {
    if (mobile) setActive(false);
  }, [mobile]);

  useEffect(() => {
    setActive(false);
  }, [router.route]);

  return (
    <div className="w-screen">
      <Nav active={active} setActive={setActive} route={route} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
