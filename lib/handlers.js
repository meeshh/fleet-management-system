import fs from "fs";
import path from "path";

/**
 * higher order function that returns a handler function
 * ideally each endpoint handles its own scoped request, database query and response
 */
export const createHandler = (filename) => (req, res) => {
  const filePath = path.join(process.cwd(), "public", filename);
  const { query } = req;

  try {
    const data = fs.readFileSync(filePath);
    const jsonData = JSON.parse(data);

    // filter data based on query parameters
    const filteredData = jsonData.filter((item) =>
      Object.keys(query).every(
        (key) =>
          item.hasOwnProperty(key) &&
          (Array.isArray(item[key])
            ? JSON.stringify(item[key]) === query[key].replace(" ", "")
            : item[key] == query[key])
      )
    );

    res.status(200).json(filteredData);
  } catch (err) {
    res.status(500).json({ error: `Error reading ${filename}` });
  }
};
