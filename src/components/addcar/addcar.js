import React from 'react';
import { useState } from 'react';
import './addcar.css';
import data from '../../data/carData.json';

const Addcar = ({ handleAddingcar }) => {
  const [Model, setModel] = useState('');
  const [quantity, setQuantity] = useState(0);

  const [selectedBrand, setSelectedBrand] = useState('');
  const [carModels, setCarModels] = useState([]);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setSelectedBrand(selectedBrand);

    if (selectedBrand) {
      setCarModels(data[selectedBrand]);
    } else {
      setCarModels([]);
    }
  };

  return (
    <>
      <div className='Wrapper'>
        <h1 className='heading'>Add Your Cars</h1>
        <div className='form'>
          <form>
            <label className="label">
              <span> Brand Name</span>
              <select
                name="cars"
                id="cars"
                value={selectedBrand}
                onChange={handleBrandChange}
                className="input"
              >
                <option value="Choose brand">Choose brand</option>
                <option value="Maruti">Maruti</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Kia">Kia</option>
                <option value="Hundai">Hundai</option>
                <option value="Audi">Audi</option>
              </select>
            </label>

            <label className="label">
              <span>Model</span>
              <select
                value={Model}
                onChange={(e) => setModel(e.target.value)}
                className="input"
                disabled={!selectedBrand}
              >
                <option>Select A Model</option>
                {carModels?.map((car) => (
                  <option key={car.id} value={car.model}>
                    {car.model}
                  </option>
                ))}
              </select>
            </label>

            <label className="label">
              <span>Quantity</span>
              <input
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="input"
              />
            </label>
          </form>

          <button
            type='submit'
            onClick={() => handleAddingcar(selectedBrand,Model, quantity)}
            className='btn'
          >
            Add car
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Addcar;