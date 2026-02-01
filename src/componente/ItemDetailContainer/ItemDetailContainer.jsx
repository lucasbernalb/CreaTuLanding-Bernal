import { useEffect, useState } from "react"
import { getUnProducto } from "../../asyncmock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const { idItem } = useParams()

    useEffect(() => {
        getUnProducto(Number(idItem))
            .then(res => setProducto(res))
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
