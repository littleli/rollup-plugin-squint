import {createFilter} from 'rollup-pluginutils'
import {compileString} from 'squint-cljs'

const defaultOptions = {
    include: [],
    exclude: []
}

export default function squint(options = defaultOptions) {
    const filter = createFilter(options.include, options.exclude)

    return {
        name: 'squint',
        transform(source, id) {
            if (!id.endsWith('.cljs')) return null
            if (!filter(id)) return null

            try {
                let code = compileString(source)
                return {
                    code,
                    map: {
                        mappings: ''
                    }
                }
            } catch (cause) {
                this.error('Unable to compile source', id, cause)
            }
        }
    }
}
