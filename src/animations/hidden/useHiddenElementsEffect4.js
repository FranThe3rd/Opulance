import { useEffect } from 'react';

function useHiddenElementsEffect4() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show4');
        } else {
          entry.target.classList.remove('show4');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden4');
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




export default useHiddenElementsEffect4; 
