import { useRouter } from "next/router";
import React from "react";

const ReviewDetail = () => {
  const { query } = useRouter();
  const { productId, reviewId } = query;
  return (
    <div>
      ReviewDetail {reviewId} for product {productId}
    </div>
  );
};

export default ReviewDetail;
