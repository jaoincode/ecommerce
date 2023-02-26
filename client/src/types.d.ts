declare type ProductType = {
  id: number;
  attributes: {
    title: string;
    desc: string;
    img: ImageType;
    img2: ImageType;
    isNew: boolean;
    oldPrice: number;
    price: number;
  };
};

declare type ItemType = {
  id: number;
  title: string;
  desc: string;
  img: ImageType;
  img2: ImageType;
  isNew: boolean;
  oldPrice: number;
  price: number;
};

declare type ImageType = {
  data: {
    attributes: {
      url: string;
    };
  };
};

declare type ProductsResponse = {
  data: {
    data: ProductType[];
  };
};

declare type ListType = {
  catId: number;
  maxPrice: number;
  sort: "desc" | "asc" | null;
  subCats: string[];
};
