const Box = x =>
    ({
        inspect: () => `Box(${x})`,
        map: f => Box(f(x)),
        fold: f => f(x)
    })

/** IMPERATIVE  */
const moneyToFloat = str => 
    parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
    const replaced = str.replace(/\%/g, '')
    const number = parseFloat(replaced)
    return number * 0.01
}

const applyDiscount = (price, discount) => {
    const cost = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cost - cost * savings
}

const result = applyDiscount('$5.00', '20%')
console.log(result) 