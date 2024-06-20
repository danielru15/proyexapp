 interface option {
    root:any, 
    threshold:number,
    rootMargin:string
 }

 export const handleScroll = (className:string, element:string , efect:string, options:option):void =>  {

     const {root,rootMargin, threshold} = options

    const observerOptions: IntersectionObserverInit = {
        root:root, // El viewport será el root
        rootMargin:rootMargin, // Sin margen adicional
        threshold:threshold // Observar cuando el 100% del elemento esté visible recibe valor entre 0 a 1
    }

    const elementsAnimation = document.querySelectorAll<HTMLElement>(element)
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          
                elementsAnimation.forEach((element) => {
                  element.classList.toggle(efect, entry.isIntersecting)
                })
            
            
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const target = document.querySelector(className)

    if (target) {
        observer.observe(target);
    }
}

