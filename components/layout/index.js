import { useEffect, useState } from "react";
import Nav from "./nav/nav";
import Footer from "./footer";
import useWindow from "../../hooks/useWindow";
import { useRouter } from "next/router";
// import data from "../../utils/layout-data.preval";

const Layout = ({ children, data }) => {
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
    <div className="w-[100vw] max-w-full overflow-hidden font-body">
      <Nav
        data={data}
        active={active}
        setActive={setActive}
        route={router.route}
      />
      {children}
      <Footer data={data} />
    </div>
  );
};

export default Layout;
