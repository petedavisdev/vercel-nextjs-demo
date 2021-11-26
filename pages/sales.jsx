import useSWR from "swr";

const salesUrl = "http://localhost:3001/sales";

async function fetcher(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching data");
    return response.json();
}

export async function getStaticProps() {
    const data = await fetcher(salesUrl);
    return {
        props: {
            fallback: data,
        },
    };
}

export default function Sales({ fallback }) {
    const { data, error } = useSWR(salesUrl, fetcher);

    if (error) return error.message;

    const sales = data || fallback;

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>{sale.text}</li>
            ))}
        </ul>
    );
}
