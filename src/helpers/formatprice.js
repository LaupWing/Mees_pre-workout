export default function formatPrice(price){
    const fullNumber = String(price).split('.')[0] 
    const decimalNumber = String(price).split('.')[1]
    return `€ ${fullNumber},${decimalNumber < 10 && !decimalNumber.includes('0') ? decimalNumber + '0' : decimalNumber}`
}