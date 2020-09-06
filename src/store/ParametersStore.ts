import { observable, action, computed, reaction } from 'mobx';
import { createContext } from 'react';
import { SortAlgorithm } from './AlgoStore';

import sortAlgoList from '../Algorithm';

export interface Parameters {
    size: number,
    speed: number,
    algorithm: SortAlgorithm // could this be SortAlgorithm?
}

const MIN_SPEED = 0
const MAX_SPEED = 10
const MIN_SIZE = 2
const MAX_SIZE = 100

class ParameterStore {
    @observable params = {
        size: MIN_SIZE,
        speed: MIN_SPEED,
        algorithm: sortAlgoList.filter(algo => algo.name === 'Insertion Sort')[0]
    }

    @action changeSize = (newSize: number) => {
        if (newSize < MIN_SIZE || newSize > MAX_SIZE) throw new Error(`Size limit exception: ${newSize}`)

        this.params = { ...this.params, size: newSize }
    }

    @action changeSpeed = (newSpeed: number) => {
        if (newSpeed < MIN_SPEED || newSpeed > MAX_SPEED) throw new Error(`Speed limit exception: ${newSpeed}`)

        this.params = { ...this.params, speed: newSpeed }
    }

    @action changeAlgorithm = (algoName: string) => {
        const newAlgo = sortAlgoList.filter(algo => algo.name === algoName)

        if (newAlgo.length > 0) this.params = {...this.params, algorithm: newAlgo[0]}
    }
}

export default createContext(new ParameterStore())