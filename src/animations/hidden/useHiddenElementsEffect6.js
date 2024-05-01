import { useEffect } from 'react';

function useHiddenElementsEffect6() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show6');
        } else {
          entry.target.classList.remove('show6');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden6');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}




export default useHiddenElementsEffect6; 
