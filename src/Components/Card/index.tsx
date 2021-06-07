import React from "react";
import style from "./ProductCard.module.scss";

interface IProps {
  title: string;
  count: number;
}

class ProductCard extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps: any) {
    if (nextProps.count === 4) {
      return false;
    }
    return true;
  }

  render() {
    const { title, count, children } = this.props;

    return (
      <>
        <div className={style.wrapper}>
          <h1>
            Выбранный товар {title} в количестве {count} шт
          </h1>
          <div className={style.card}>{children}</div>
        </div>
      </>
    );
  }
}
export default ProductCard;
