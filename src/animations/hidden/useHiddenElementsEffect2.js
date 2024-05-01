import { useEffect } from 'react';

function useHiddenElementsEffect2() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show2');
        } else {
          entry.target.classList.remove('show2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden2');
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




export default useHiddenElementsEffect2; 
