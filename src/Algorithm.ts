import { SortAlgorithm } from './store/AlgoStore'
import { SortableElement } from './store/ElementsStore'
import { Parameters } from './store/ParametersStore'

const InsertionSort: SortAlgorithm = {
    name: 'Insertion Sort',
    complexity: 'O(n^2)',
    sort: (elems: SortableElement[], params: Parameters) => insertionSortAlgorithm(elems, params)
}

const insertionSortAlgorithm = (elems: SortableElement[], params: Parameters) => {
    let i = 1;
    while (i < elems.length) {
        let j = i;
        while (j > 0 && elems[j].value < elems[j - 1].value) {
            let tmp = elems[j];
            elems[j] = elems[j - 1];
            elems[j - 1] = tmp;
            j--;
        }
        i++;
    }

    return elems;
}

const MergeSort: SortAlgorithm = {
    name: 'Merge Sort',
    complexity: 'O(log n)',
    sort: (elems: SortableElement[], params: Parameters) => mergeSortAlgorithm(elems, params)
}

const mergeSortAlgorithm = (elems: SortableElement[], params: Parameters) => {
    return elems;
}

const QuickSort: SortAlgorithm = {
    name: 'Merge Sort',
    complexity: 'O(log n)',
    sort: (elems: SortableElement[], params: Parameters) => quickSortAlgorithm(elems, params)
}

const quickSortAlgorithm = (elems: SortableElement[], params: Parameters) => {
    return elems;
}

const HeapSort: SortAlgorithm = {
    name: 'Heap Sort',
    complexity: 'O(log n)',
    sort: (elems: SortableElement[], params: Parameters) => heapSortAlgorithm(elems, params)
}

const heapSortAlgorithm = (elems: SortableElement[], params: Parameters) => {
    return elems;
}

export default [
    InsertionSort,
    MergeSort,
    QuickSort, 
    HeapSort
]