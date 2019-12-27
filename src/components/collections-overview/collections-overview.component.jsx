import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otheCollectionProps }) => (
      <CollectionPreview key={id} {...otheCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
