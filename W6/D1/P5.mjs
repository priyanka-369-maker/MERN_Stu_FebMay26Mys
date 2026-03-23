//Es module exports
//named export for a shared constant
export const taxrate = 0.18;
//Named export for reusable function
 export function calculateTotal(subtotal){
 return subtotal + subtotal*taxrate;
}
//Default export:for the main feature of the module.
 export default function createInvoiceLabel(invoiceNumber){
    return "Invoice:"+invoiceNumber;
}