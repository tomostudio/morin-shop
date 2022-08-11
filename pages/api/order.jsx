export async function order(req, res) {
  const { body } = req
  console.log(body)
  res.status(200).json({ data: body })
}
