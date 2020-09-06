import { observable, action, computed, reaction } from 'mobx';
import { createContext } from 'react';

import { SortableElement } from './ElementsStore';
import { Parameters } from './ParametersStore';

import sortAlgoList from '../Algorithm';

export interface SortAlgorithm {
    name: string;
    complexity: string;
    sort: (elems: SortableElement[], params: Parameters) => SortableElement[]
}

class AlgoStore {
    constructor() {
        reaction(() => this.algoList, _ => console.log('Algorithm: ', this.algoList));
    }

    @observable algoList: SortAlgorithm[] = sortAlgoList;

    @action selectAlgorithm = (name: string) => {
        return this.algoList.filter(algo => algo.name === name);
    }
}

export default createContext(new AlgoStore())