import { useEffect } from 'react';

function useHiddenElementsEffect5() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show5');
        } else {
          entry.target.classList.remove('show5');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden5');
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




export default useHiddenElementsEffect5; 
