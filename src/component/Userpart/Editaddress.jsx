import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditAddressPage({ match }) {
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/address/${match.params.id}`);
        setAddress(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchAddress();
  }, [match.params.id]);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/address/${match.params.id}`, address);
      // Handle successful update, e.g., redirect to a confirmation page
    } catch (error) {
      console.error(error);
      // Handle error, e.g., display error message to the user
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Address</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for address properties */}
        <button type="submit">Update Address</button>
      </form>
    </div>
  );
}

export default EditAddressPage;