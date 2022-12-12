import React, { useState, useEffect } from 'react';
import { Switch } from 'react-view-design';

export default function App() {
  return (
    <>
      <Switch loading defaultChecked></Switch>
      <Switch loading></Switch>
    </>
  );
}
