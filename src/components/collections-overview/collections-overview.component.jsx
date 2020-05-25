import React from "react";
import { connect } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          id={collection.id}
          items={collection.items}
          title={collection.title}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
