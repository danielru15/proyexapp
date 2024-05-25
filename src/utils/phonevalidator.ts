export const isValidPhoneNumber = (phone: string):boolean =>  {
    const phoneRegex:RegExp =/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
    return phoneRegex.test(phone);
}