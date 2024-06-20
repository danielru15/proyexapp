export const animateValue = (
    obj: HTMLElement, 
    start: number, 
    end: number, 
    duration: number,
    startDecorator?:string , 
    endDecorator?:string ) : void => {

            let startTimestamp: number | null = null;
            const step = (timestamp: number): void => {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const currentValue = Math.floor(progress * (end - start) + start).toString()

                // Usamos los decoradores si están definidos, de lo contrario usamos una cadena vacía
                    const startDec = startDecorator ? startDecorator : '';
                    const endDec = endDecorator ? endDecorator : '';

                // Actualizamos el contenido del objeto con el valor actual y los decoradores
                    obj.innerHTML = startDec + currentValue  + endDec;

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }
            
        window.requestAnimationFrame(step);
    }