// @flow
import { List } from "immutable";

import type { Direction } from "./constants";

// Position
export type RawPosition = {
  formacion_id: number,
  estado_mov: number,
  estado_servicio: number,
  latitud: string,
  longitud: string,
  ramal: number
};

export type Position = {
  id: number,
  moviendose: boolean,
  direction: Direction,
  position: { lat: number, lng: number }
};

// Arrivals
export type RawArrival = {
  nombre: string,
  minutos_1: string,
  minutos_2: string,
  minutos_3: string,
  minutos_4: string
};

export type Arrival = {
  station: string,
  arrivals: { primero: string, segundo: string }[]
};

// State
export type DataState = {
  positions: List<Position>,
  arrivals: List<Arrival>,
  error: ?string,
  status: "init" | "pending" | "success" | "failure"
};

// Response
export type DataResponse = {
  positions: RawPosition[],
  arrivals: RawArrival[]
};
