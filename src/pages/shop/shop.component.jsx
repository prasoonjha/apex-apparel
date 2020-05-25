import React from "react";
import { connect } from "react-redux";

import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./shop.styles.scss";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview
          id={collection.id}
          items={collection.items}
          title={collection.title}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopPage);
