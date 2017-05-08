import * as select from 'd3-selection'
import {event} from 'd3-selection'
import * as scale from 'd3-scale'
import * as path from 'd3-path'
import * as transition from 'd3-transition'
import {max} from 'd3-array'



const d3 = {
    ...select,
    ...scale,
    ...path,
    ...transition,
    max,
    event
}

export {d3 as default}