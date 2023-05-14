import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    window.document.title = `${title} - Car Doctor`;
    window.scrollTo(0, 0);
  }, []);
};

export default useTitle;
