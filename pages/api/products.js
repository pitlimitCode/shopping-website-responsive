
export default async function products(req, res) {
  await fetch('https://fakestoreapi.com/products')
    .then(resp=>resp.json())
    .then(json=>
      res.status(200).json(json)
    )
  // res.status(200).json({ message: 'Hello from Next.js API Route!' });
}