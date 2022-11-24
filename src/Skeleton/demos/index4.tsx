import React, { useState, useEffect } from 'react';
import { Skeleton } from 'react-view-design';

export default function Loading() {
  return (
    <>
      <Skeleton title avatar row={4} width={['50%', '60%', '70%', '80%']}></Skeleton>
    </>
  );
}
