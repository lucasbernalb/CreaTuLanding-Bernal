const misProductos = [

    {id: 1, nombre: "Cuadro de Charly Garcia", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg", idCat:"tendencia", stock:10}, 
    {id: 2, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg", idCat:"tendencia", stock:10}, 
    {id: 3, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"tendencia", stock:10}, 
    {id: 4, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"tendencia", stock:10}, 
    {id: 5, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"descuento", stock:10}, 
    {id: 6, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"descuento", stock:10}, 
    {id: 7, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"descuento", stock:10}, 
    {id: 8, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg" , idCat:"descuento", stock:10}, 
    {id: 9, nombre: "Cuadro de dragon", precio: 2500, img:"../public/img/cuadros/charly-garcia.jpeg", idCat:"descuento", stock:10}, 
   // {id: 10, nombre: "Cuadro de dragon", precio: 2500, img:"./img/cuadros/charly-garcia.jpeg"}, 

];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        }, 2000)
    }
 )
}

export const getUnProducto = (id) =>{
    return new Promise(res =>{
        setTimeout(() => {
            const producto = misProductos.find(Item => Item.id === id)
            res(producto)
        }, 1000)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise(res => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            res(productosCategoria)
        }, 1000)
    })
}