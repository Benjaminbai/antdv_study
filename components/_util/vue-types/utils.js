import isPlainObject from 'lodash/isPlainObject'

const ObjProto = Object.prototype
const toString = ObjProto.toString
export const hasOwn = ObjProto.hasOwnProperty

const FN_MATCH_REGEXP = /^\s*function (\w+)/

export const getType = fn => {
    const type = fn !== null && fn !== undefined ? (fn.type ? fn.type : fn) : null
    const match = type && type.toString().match(FN_MATCH_REGEXP)
    return match && match[1]
}

export const getNativeType = value => {
    if (value === null || value === undefined) {
        return null
    }

    const match = value.constructor.toString().match(FN_MATCH_REGEXP)
    return match && match[1]
}

export const noop = () => { }

/**
 * @param {object} obj
 * @param {string} prop
 */
export const has = (obj, prop) => hasOwn.call(obj, prop)

/**
 * @param {*} value
 * @param {boolean}
 */
export const isInteger =
    Number.isInteger ||
    function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
    }

/**
 * @param {*} value
 * @param {boolean}
 */
export const isArray =
    Array.isArray ||
    function (value) {
        return toString.call(value) === '[object Array]'
    }

/**
 * @param {*} value
 * @param {boolean}
 */
export const isFunction = value => toString.call(value) === '[object Function]'

/**
 * @param {object} type
 */
export const withDefault = function (type) {
    Object.defineProperty(type, 'def', {
        value(def) {
            if (def === undefined && this.default === undefined) {
                this.default = undefined
                return this
            }
            if (!isFunction(def) && !validateType(this, def)) {
                warn(`${this._vueTypes_name} - invalid default value: "${def}"`, def)
                return this
            }

            this.default = isArray(def) || isPlainObject(def) ? function () { return def } : def
            return this
        },
        enumerable: false,
        writable: false
    })
}

/**
 * @param {object} type
 */
export const withRequired = function (type) {
    Object.defineProperty(type, 'isRequired', {
        get() {
            this.required = true
            return this
        },
        enumerable: false
    })
}

/**
 * @param {string} name
 * @param {object} obj
 * @returns {object}
 */
export const toType = (name, obj) => {
    Object.defineProperty(obj, '_vueTypes_name', {
        enumerable: false,
        writable: false,
        value: name
    })
    withRequired(obj)
    withDefault(obj)

    if (isFunction(obj.validator)) {
        obj.validator = obj.validator.bind(obj)
    }

    return obj
}

/**
 * @param {Object|*} type
 * @param {*} value
 * @param {boolean} silent
 * @returns {boolean}
 */
export const validateType = (type, value, silent = false) => {
    let typeToCheck = type
    let valid = true
    let expectedType
    if (!isPlainObject(type)) {
        typeToCheck = { type }
    }
    const namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : ''
    if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
        if (isArray(typeToCheck.type)) {
            valid = typeToCheck.type.some(type => validateType(type, value, true))
            expectedType = typeToCheck.type.map(type => getType(type)).join(' or ')
        } else {
            expectedType = getType(typeToCheck)
            if (expectedType === 'Array') {
                valid = isArray(value)
            } else if (expectedType === 'Object') {
                valid = isPlainObject(value)
            } else if (
                expectedType === 'String' ||
                expectedType === 'Number' ||
                expectedType === 'Boolean' ||
                expectedType === 'Function'
            ) {
                valid = getNativeType(value) === expectedType
            } else {
                valid = value instanceof typeToCheck.type
            }
        }
    }

    if (!valid) {
        silent === false && warn(`${namePrefix}value "${value}" should be of type "${expectedType}"`)
        return false
    }

    if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
        valid = typeToCheck.validator(value)
        if (!valid && silent === false) {
            warn(`${namePrefix}custom validation failed`)

        }
        return valid
    }
    return valid
}

let warn = noop

if (process.env.NODE_ENV !== 'production') {
    const hasConsole = typeof console !== 'undefined'
    warn = msg => {
        if (hasConsole) {
            console.warn(`[VueType warn]: ${msg}`)
        }
    }
}

export { warn }