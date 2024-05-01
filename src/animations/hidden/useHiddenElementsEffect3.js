import { useEffect } from 'react';

function useHiddenElementsEffect3() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show3');
        } else {
          entry.target.classList.remove('show3');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden3');
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




export default useHiddenElementsEffect3; 
