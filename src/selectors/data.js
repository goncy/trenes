// @flow

import { List } from "immutable";

import { getDirection } from "./constants";

import type {
  RawArrival,
  RawPosition,
  Arrival,
  Position,
  DataState,
  DataResponse
} from "../flowtypes/data";
import type { PreferencesState } from "../flowtypes/preferences";
import type { AppState } from "../flowtypes/globals";

export const shapeArrivals = (arrivals: RawArrival[]): List<Arrival> =>
  List(
    arrivals.map(arrival => ({
      station: arrival.nombre,
      arrivals: [
        {
          primero: arrival.minutos_1,
          segundo: arrival.minutos_2
        },
        {
          primero: arrival.minutos_3,
          segundo: arrival.minutos_4
        }
      ]
    }))
  );

export const shapePositions = (
  preferences: PreferencesState,
  positions: RawPosition[]
): List<Position> =>
  List(
    positions.map(position => ({
      id: position.formacion_id,
      direction: getDirection(preferences.branch, position.ramal),
      moviendose: position.estado_mov === 1 && position.estado_servicio === 1,
      position: {
        lat: Number(position.latitud),
        lng: Number(position.longitud)
      }
    }))
  );

export const shapeResponse = (
  { preferences }: AppState,
  { arrivals, positions }: DataResponse
) => ({
  arrivals: shapeArrivals(arrivals),
  positions: shapePositions(preferences, positions)
});

export const hasData = ({ positions, arrivals }: DataState): boolean =>
  !positions.isEmpty() && !!arrivals;
export const hasSucceeded = ({ status }: DataState): boolean =>
  status === "success";
export const hasError = ({ error }: DataState): boolean => !!error;
export const getPositions = ({ positions }: DataState) => positions;
export const getArrivals = ({ arrivals }: DataState) => arrivals;
