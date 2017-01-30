import {TRAIN_STATIC_DATA} from '../constants'

export const getLines = TRAIN_STATIC_DATA
  .map(({id, name}) => ({id, name}))

export const getBranches = line => TRAIN_STATIC_DATA
  .find(ln => ln.id === line.id)
  .branches

export const getLine = line => TRAIN_STATIC_DATA
  .find(ln => ln.id === line)

export const getBranch = (line, branch) => getBranches(line)
  .find(rm => rm.id === branch)

export const getStation = (branch, station) => branch
  .stations
  .find(est => est.id === station)

export const getStationIndex = (branch, station) => branch
  .stations
  .findIndex(est => est.id === station)

export const getBranchDirection = (branch, id) => branch
  .directions
  .find(direction => direction.id === id)

export const getBranchColor = (branch, id) => branch
  .directions
  .find(direction => direction.id === id)
  .color