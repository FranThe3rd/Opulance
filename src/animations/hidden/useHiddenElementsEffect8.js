import { useEffect } from 'react';

function useHiddenElementsEffect8() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show8');
        } else {
          entry.target.classList.remove('show8');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden8');
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




export default useHiddenElementsEffect8; 
