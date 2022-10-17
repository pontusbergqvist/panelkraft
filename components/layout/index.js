import { useEffect, useState } from "react";
import Nav from "./nav/nav";
import Footer from "./footer";
import useWindow from "../../hooks/useWindow";
import { useRouter } from "next/router";

const Layout = ({ route, data, children }) => {
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
    <div className="w-[100vw] max-w-full overflow-hidden">
      <Nav data={data} active={active} setActive={setActive} route={route} />
      {children}
      <Footer data={data} />
    </div>
  );
};

export default Layout;
