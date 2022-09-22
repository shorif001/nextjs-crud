// export default function myFunction(req, res){
//   if(req.method === "GET"){
//     res.status(200).send("Get request successful");
//   }
//   if(req.method === "Post"){
//     const {name} = req.body
//     res.status(201).json({
//       message: 'Success',
//       method: 'POST',
//       name,
//     })
//   }
// }


import nc from "next-connect";

const users = [
  { name: 'shorif', email: "test@test.com", phone: 123456 },
  { name: 'shipon', email: "shipon@test.com", phone: 321321321 },
  { name: 'ahmed', email: "ahmed@test.com", phone: 654654 },
]

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})

  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    const { name } = req.body
    res.send(name);
  })



export default handler;