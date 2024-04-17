import DetailsComponent from '../../components/Details';
import { useBook } from '../../hooks/book';

const Details = ({ item, categories }) => {
  const { book } = useBook();

  return <DetailsComponent item={item} categories={categories} book={book} />;
};

export default Details;
