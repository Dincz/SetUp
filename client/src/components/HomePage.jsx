import  { useState, useEffect } from 'react';
import axiosInstance from '../Helpers/axiosInstance'; // Import your axios instance

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/category/all');
        console.log(response.data);
        setCategories(response.data); 
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      {categories.map(category => (
        <div key={category._id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
