import { useEffect } from 'react';

function useHiddenElementsEffect9() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show9');
        } else {
          entry.target.classList.remove('show9');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden9');
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




export default useHiddenElementsEffect9; 
