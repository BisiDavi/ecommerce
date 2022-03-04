import Link from "next/link";
import RatingStar from "@/components/Rating/RatingStar";
import styles from "@/styles/ui.module.css";
import Image from "@/components/Image";

interface CategoryProps {
  category: {
    name: string;
    slug: string;
    images: {
      file: {
        url: string;
      };
      name: string;
    }[];
  };
}
export default function Category({ category }: CategoryProps): JSX.Element {
  return (
    <div className="category">
      {category?.images && (
        <Link href={`/shop/product-type/${category.slug}`} passHref>
          <a className={styles.categoryLink}>
            <Image
              height={320}
              width={450}
              className="rounded-lg"
              src={category.images[0].file.url}
              alt={category.name}
              blurDataURL={category.images[0].file.url}
              loading="lazy"
              layout="responsive"
            />
          </a>
        </Link>
      )}
      <div className="card-body py-2">
        <h3 className="product-title fs-sm">
          <Link href={`/shop/${category.slug}`} passHref>
            <a className="hover:text-red-500">{category.name}</a>
          </Link>
        </h3>
        <RatingStar rate={5} />
      </div>
    </div>
  );
}
