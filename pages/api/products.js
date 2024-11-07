
export default function products(req, res) {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>
    res.status(200).json(json)
  )
  // res.status(200).json({ message: 'Hello from Next.js API Route!' });
}