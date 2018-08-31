import * as React from 'react';

export interface HouseDetail {
  id: string;
  address: string;
  price: string;
  houseType: string;
  bedroom: number;
  bathroom: number;
}

export type HouseDetailTileProps = HouseDetail;

const HouseDetailTile: React.StatelessComponent<HouseDetailTileProps> = (props) => {
  const { address, price, houseType, bedroom, bathroom } = props;

  return (
    <div className="house-detail-tile">
      <div>{address}</div>
      <div>{price}</div>
      <div>{houseType}</div>
      <div>{bedroom}</div>
      <div>{bathroom}</div>
    </div>
  );
}

export default HouseDetailTile;