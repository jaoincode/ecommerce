import "./Products.scss";

import List from "../../components/List";

import { useParams } from "react-router-dom";

import { ChangeEvent, useState } from "react";

import useFetch from "../../hooks/useFetch";

type SortType = "desc" | "asc";

function Products() {
  const { id: categoryId } = useParams();

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState<SortType | null>("asc");
  const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setSelectedSubCats(
      checked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data &&
            data.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={String(item.id)}
                  value={item.id}
                  onChange={handleCheck}
                />
                <label htmlFor="1">{item.attributes.title}</label>
              </div>
            ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={({ target }) => setMaxPrice(+target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
              checked={sort === "asc"}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              checked={sort === "desc"}
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="catImg"
        />
        <List
          catId={+categoryId!}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
}

export default Products;
