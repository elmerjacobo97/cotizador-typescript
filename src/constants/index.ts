export const MARCAS = [
    {
        id: 1,
        name: 'Europeo'
    },
    {
        id: 2,
        name: 'Americano'
    },
    {
        id: 3,
        name: 'Asiático'
    }
]

export const PLANES = [
    {
        id: 1,
        name: 'Básico',
    },
    {
        id: 2,
        name: 'Completo',
    }
]

const YearMax = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (value, index) => YearMax - index);
