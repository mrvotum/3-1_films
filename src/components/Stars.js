import React from 'react';
import Star from './Star';

export default function Stars({count}) {
  let correct = true;

  if (!Number.isInteger(count) || count <= 0 || count > 5) correct = false;
  return (
    correct && (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map(item => (
          <Star key={item} />
        ))}
      </ul>
    )
  );
}
