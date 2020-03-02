/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';

import './PlaceForm.css';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

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

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find a place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <form className='place-form' action=''>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        type=''
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description.'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button
        type='submit'
        onClick={placeUpdateSubmitHandler}
        disabled={!formState.isValid}
      >
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
