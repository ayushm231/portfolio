import React from 'react';

export default function SectionHeading({ title }) { 
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{title}</h2> // Use the title prop
  );
}

