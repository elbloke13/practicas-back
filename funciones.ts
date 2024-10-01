//for each -> hace algo(funcion) con cada elemento


//map -> transformar 1 a 1  arr2 = arr1.map(funcion) tiene que tener el mismo tamaño



//filter -> quedarse algunos elementos arr2 = arr1.filter(funcion) el arr2 sera mas pequeño o igual que arr1






//Convertir precios de dolares a euros

const preciosDolares: number[] = [10,20,30,40];

const preciosEuros: number[] = preciosDolares.map((e: number): number => e* 0.85);

//array personas
const personas = [
    { nombre: 'Ana' , edad: 25},
    { nombre: 'Luis' , edad: 22},
    { nombre: 'Carlos' , edad: 30}
]

//mostrar "hola, soy + nombre + y tengo + edad + años. "

personas.forEach((personas) => console.log('hola, soy $[personas.nombre] y tengo &[personas.edad] años.'))



//longitud de una cadena

const cadenas =['Javascript', 'Python', 'Java', 'C++'];

const longitud = cadenas.map((e: string): number => e.length);



//Productos con descuento

const productos = [
    { nombre: 'Laptop' , precio: 800},
    { nombre: 'Mouse' , precio: 20},
    { nombre: 'Teclado' , precio: 45},
    { nombre: 'Monitor' , precio: 150},
    { nombre: 'Silla' , precio: 30}
]



const nombredescuento = productos.filter((e) => e.precio * 0.9 < 50).map((e) => e.nombre);



const estudiantes = [
    { nombre: 'Ana' , edad: 20 , calificaciones: [80,90,70]},
    { nombre: 'Luis' , edad: 17, calificaciones: [60, 75, 85]},
    { nombre: 'Carlos' , edad: 22, calificaciones: [90, 95, 100]},
    { nombre: 'Maria' , edad: 19, calificaciones: [70,80,90]}
]


//hacer medias calificaciones
function calcularMedias(calificaciones : number[]): number{
    let sum = 0
    calificaciones.forEach( e => sum += e)
    return sum/calificaciones.length
}

const estudiantesNew = estudiantes.map( e => ({
    nombre : e.nombre,
    media : calcularMedias(e.calificaciones)
}))

console.log(estudiantesNew)

//array de numeros encontrar negativos
const numeros: number[] = [2,5,7,9,-2];

const negativos : boolean = numeros.some((e : number) => e < 0);




//array estudiantes si han aprobado

const estudiante = [
    { nombre: 'Ana' , edad: 20 , calificaciones: [80,90,70]},
    { nombre: 'Luis' , edad: 17, calificaciones: [60, 75, 85]},
    { nombre: 'Carlos' , edad: 22, calificaciones: [40, 95, 100]},
    { nombre: 'Maria' , edad: 19, calificaciones: [70,80,90]}
]


const aprobados: boolean = estudiante.every((e) => e.calificaciones.every((n) => n >= 50));
















