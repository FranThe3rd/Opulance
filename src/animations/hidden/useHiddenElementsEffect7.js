import { useEffect } from 'react';

function useHiddenElementsEffect7() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show7');
        } else {
          entry.target.classList.remove('show7');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden7');
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




export default useHiddenElementsEffect7; 
