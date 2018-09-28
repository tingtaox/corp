import * as React from 'react';

export interface HouseCardProps {
  title: string;
  destination: string;
  timeByCar: number;
  timeByBike: number;
  timeByWalk: number;
  transportation: string;
  gasStation: string;
  price: number;
}

export type HouseCardInfo = HouseCardProps;

const HouseCard: React.StatelessComponent<HouseCardProps> = (props) => {

  return (
    <div className="result-tile">
      <span className="image">Image</span>
      <span className="house-info">
        <div className="title">{props.title}</div>
        <div className="destination">{props.destination}</div>
        <div className="distance">
          <span>{props.timeByCar}分钟</span>
          <span>{props.timeByBike}分钟</span>
          <span>{props.timeByWalk}分钟</span>
        </div>
        <div className="transportation">{props.transportation}</div>
        <div className="gas-station">{props.gasStation}</div>
      </span>

      <span className="price-details">
        <div className="price">US${props.price}/月</div>
        <div className="detail-btn">
          <button>查看详情</button>
        </div>
        <div className="favorite-btn">
          <button>收藏</button>
        </div>
      </span>
    </div>
  );

}

export default HouseCard;
