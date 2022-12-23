export const getDifferenceYear = (year: string) => {
    return new Date().getFullYear() - +year
}

export const calcularMarca = (marca: string): number => {
    let incremento: number = 0;

    // Europeo: 30%
    // Americano: 15%
    // Asiático: 5%
    switch (marca) {
        case '1':
            incremento = 1.30;
            break;
        case '2':
            incremento = 1.15;
            break;
        case '3':
            incremento = 1.05;
            break;

        default:
            break;
    }

    return incremento;
}

export const calcularPlan = (plan: string): number => {
    // Básico 25%
    // Completo 50%
    return (plan === '1') ? 1.25 : 1.50;
}

export const formatearDinero = (amount: number): string => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    // console.log(typeof formatter.format(amount));
    return formatter.format(amount);
}

// const amount = 12345.6789;
// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2
// });

// console.log(formatter.format(amount));  // "$12,345.68"
