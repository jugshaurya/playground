import React, { lazy, Suspense } from "react";

import PropDrawer from "../components/PropDrawer";

export default function Content({ ContentPlayground, ContentMDX }) {
  return (
    <div>
      <ContentPlayground />
      <Suspense fallback={<div>Loading...</div>}>
        <PropDrawer>
          <ContentMDX />
        </PropDrawer>
      </Suspense>
    </div>
  );
}
