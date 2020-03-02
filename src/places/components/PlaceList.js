/** @format */

import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';

import './PlaceList.css';

const PlaceList = props => {
  console.log(props.items);
  if (props.items.length === 0) {
    return (
      <Card className='place-list center'>
        <h2>No places found. Maybe create one?</h2>
        <Button to={'/places/new'}>Share Place</Button>
      </Card>
    );
  }

  return (
    <ul className='place-list'>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorID={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
