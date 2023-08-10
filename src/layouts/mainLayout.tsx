import React from 'react';

const mainLayout = (props: any) => {
  const {children} = props;
  return (
    <div>
      {/* header */}
      {/* sidebar */}
      <main>{children}</main>
      {/* footer */}
    </div>
  );
};

export default mainLayout;
