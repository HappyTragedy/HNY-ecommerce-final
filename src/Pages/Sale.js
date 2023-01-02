import React from "react";
import Card from "../components/Card/Card";
import { Datos } from "../components/Datos/Datos";
import { Grid } from "../components/Grid";

const Sale = () => {
  return (
    <div className="contenedor">
      <h1> Cards Productos</h1>
      <Grid>
        {Datos.map((product) => (
          <Card key={product.id} productos={product} />
        ))}
      </Grid>
    </div>
  );
};

export default Sale;
