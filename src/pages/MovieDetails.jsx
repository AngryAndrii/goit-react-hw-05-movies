import { useParams } from 'react-router';

const Details = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h3>Details</h3>
      <>Details</>
    </>
  );
};

export default Details;
