import "./List.scss";

import Card from "../Card";

import useFetch from "../../hooks/useFetch";

function List({ catId, maxPrice, sort, subCats }: ListType) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {error
        ? "Something went wrong"
        : loading
        ? "Loading.."
        : data &&
          data.map((item) => (
            <Card key={item.id} item={{ ...item.attributes, id: item.id }} />
          ))}
    </div>
  );
}

export default List;
