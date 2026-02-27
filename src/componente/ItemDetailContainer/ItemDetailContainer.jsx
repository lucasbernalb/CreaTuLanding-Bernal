import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from '../../services/config';
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

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
                <Loader/>
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
