import React from 'react';
import { SERVER } from '../../utils/const.js';

export default function WhyUsCard({info}) {
  return(
    <div className="card">
        <div className="card__icon">
          <img src={`${SERVER}/${info.icon}`} alt="" />
        </div>
        <div className="card__text">
          {info.text};
        </div>
    </div>
  )
}
