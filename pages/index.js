import { useEffect } from "react";
import HomeDash from "../component/views/home/home_main";
import { useAppContent } from "../context/content";

export default function HomePage() {
  const { setTitle} = useAppContent();
  useEffect(() => {
    setTitle("Gyelpozhing Water Management System");
  },[]);
  return <HomeDash />;
}
