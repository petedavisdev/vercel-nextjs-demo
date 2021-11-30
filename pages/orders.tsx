import { useEffect, useState } from "react";

export default function Orders() {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        getOrders();
    }, []);

    async function getOrders() {
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3001/orders");
            const data = await response.json();
            setLoading(false);
            setOrders(data);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    if (loading) {
        return <p>loading</p>;
    }

    if (!orders) {
        return <p>No orders</p>;
    }

    return (
        <ul>
            {orders.map((order) => (
                <li key={order.id}>{order.text}</li>
            ))}
        </ul>
    );
}
