export const isString = (name: string):boolean =>  {
    const stringValidator:RegExp=/^[A-Za-z\s]+$/;
    return stringValidator.test(name);
}