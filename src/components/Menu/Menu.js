import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../Services/firebase";
import { MenuShop } from "./Styled";

const Menu = () => {
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const db = getFirestore();
      try {
        const itemsCollection = db.collection(`categories`);
        const itemSnapshot = await itemsCollection.get();
        const cats = itemSnapshot.docs.map((doc) => {
          return { catId: doc.id, ...doc.data() };
        });

        setCategories(cats);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MenuShop>
      <div className="grid">
        <div className="contenedor">
          <div>
            <h2>
              <Link to={`/shop`}>Categories</Link>
            </h2>
          </div>
          <div>
            <ul>
              {!loading &&
                categories.map(({ catId, name }) => (
                  <li key={catId}>
                    <Link to={`/category/${catId}`}>{name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </MenuShop>
  );
};

export default Menu;
