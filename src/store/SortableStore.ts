import { observable, action, computed, reaction } from 'mobx'
import { createContext } from 'react'

import { SortableElement } from './ElementsStore';
import { Parameters } from './ParametersStore';
import { SortAlgorithm } from './AlgoStore';

class SortableStore {
    @action createNewArray = (size: number) => {
        return Array.from({ length: size }, () => {
            return {
                value: Math.floor(Math.random() * 9),
                height: 4,
                color: 'blue'
            }
        });
    }

    @action sort = (elements: SortableElement[], params: Parameters, algo: SortAlgorithm) => {
        algo.sort(elements, params);
    }
}

export default createContext(new SortableStore())