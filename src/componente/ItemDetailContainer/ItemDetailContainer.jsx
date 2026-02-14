import { useEffect, useState } from "react"
// import { getUnProducto } from "../../asyncmock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { db } from '../../services/config';
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

    // useEffect(() => {
    //     getUnProducto(Number(idItem))
    //         .then(res => setProducto(res))
    // }, [idItem])

    useEffect(() => {
        const nuevoDoc = doc(db, "cuadros", idItem)

        getDoc(nuevoDoc)
        .then(res =>{
            const data = res.data()
            console.log(data)
            const nuevoProducto = {id: res.id, ...data}
            setProducto(nuevoProducto)
        })
        .catch(error => console.log(error))
    }, [idItem])

    if (!producto) {
        return (
            <div className="container d-flex justify-content-center mt-5">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (
        <div className="container">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
