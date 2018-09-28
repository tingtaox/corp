import * as React from 'react';

const Recommendations: React.StatelessComponent<any> = (props) => {

  return (
    <div className="recommendations">
      <div className="navtabs">
        <span className="active">美国</span>
        <span>英国</span>
        <span>澳大利亚</span>
      </div>
      <div className="cities">
        <div className="title">城市</div>
        <div className="options">
          <span>纽约</span>
          <span>波士顿</span>
          <span>芝加哥</span>
          <span>华盛顿</span>
          <span>费城</span>
          <span>巴尔的摩</span>
          <span>西雅图</span>
          <span>旧金山</span>
          <span>圣何塞</span>
          <span>洛杉矶</span>
          <span>圣地亚哥</span>
        </div>
      </div>
      <div className="schools">
        <div className="title">学校</div>
        <div className="options">
          <span>南加州大学</span>
          <span>加州大学洛杉矶分校</span>
          <span>东北大学</span>
          <span>华盛顿大学</span>
          <span>旧金山艺术大学</span>
          <span>哥伦比亚大学</span>
          <span>天普大学</span>
          <span>加州大学伯克利分校</span>
          <span>加州大学圣迭戈分校</span>
          <span>加州大学尔湾分校（欧文分校）</span>
          <span>波士顿大学(中心校区)</span>
          <span>佩斯大学</span>
          <span>纽约视觉设计艺术学院(SVA)</span>
          <span>福特汉姆大学-林肯中心校区</span>
        </div>
      </div>
    </div>
  );

}

export default Recommendations;