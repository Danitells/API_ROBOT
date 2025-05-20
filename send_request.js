import axios from "axios";
import fs from "node:fs";
import { readFile } from "node:fs/promises";

const url = "https://api.clickup.com/api/v2/folder/90137350984/list";

axios
  .get(url, {
    headers: {
      Authorization: "pk_138202176_7LQLXBKL20YS3QPTUVC10WVZACL48VHZ",
    },
  })
  .then((response) => {
    const data = JSON.stringify(response.data, null, 2);
    fs.writeFile("response.json", data, (err) => {
      if (err) {
        console.error("File wasn't written", err);
      } else {
        console.log("File is successfully written to response.json");
      }
    });
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error:", error.response.status, error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  });

  async function readContent() {
    try {
      const content = await readFile('response.json', 'utf8');
      console.log("File content:", content);
      return content;
    } catch (err) {
      console.error("Error while reading:", err);
    }
  }
  
  const content = await readContent();
  const json = JSON.parse(content);
  
  for(let item of json.lists){
    console.log(item.id)
    console.log(item.name)
  }


