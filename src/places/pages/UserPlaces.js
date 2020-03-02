/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Emp.. State Building',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1559661596%2Fempire-state-building-EMPIREX0619.jpg%3Fitok%3D3hinpOrJ&f=1&nofb=1',
    description:
      'The Empire State Building is a skyscraper in New York City, United States.It is 381 metres (1,250 feet) tall and has 102 floors, and the height to its pinnacle is 1,454 feet.',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: { lat: 40.748587, lng: -73.985665 },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1559661596%2Fempire-state-building-EMPIREX0619.jpg%3Fitok%3D3hinpOrJ&f=1&nofb=1',
    description:
      'The Empire State Building is a skyscraper in New York City, United States.It is 381 metres (1,250 feet) tall and has 102 floors, and the height to its pinnacle is 1,454 feet.',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: { lat: 40.748587, lng: -73.985665 },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(places => places.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
