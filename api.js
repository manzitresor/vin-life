export async function getVans() {
    const res = await fetch("/api/vans/as")
    const data = await res.json()
    return data.vans
}