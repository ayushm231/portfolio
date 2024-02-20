import React from 'react';

type SectionHeadingProps = {
  title: string; // Specify that title is of type string
};

export default function SectionHeading({ title }: SectionHeadingProps) { 
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{title}</h2> // Use the title prop
  );
}

