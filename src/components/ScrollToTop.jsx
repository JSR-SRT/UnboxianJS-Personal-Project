// 📁 src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ทุกครั้งที่เปลี่ยนหน้า ให้ scroll ขึ้นบนสุด
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
