import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

function CardList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/product")
      .then((response) => {
        setProducts([...response.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((currentProductObj) => (
          <div key={currentProductObj._id} className="col-4">
            <Card
              picture={currentProductObj.pictureUrl}
              name={currentProductObj.name}
              description={currentProductObj.manufacturer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
