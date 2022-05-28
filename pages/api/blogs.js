import * as fs from "fs";

// Get folder through this api
// http://localhost:3000/api/blogs

export default async function handler(req, res) {
  // write with async awiat
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
