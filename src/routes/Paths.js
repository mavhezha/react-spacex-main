const PUBLIC_ROOT = '/'

function path(root, sublink) {
    return `${root}${sublink}`
}

export const PUBLIC_PATHS = {
    home: path(PUBLIC_ROOT, '')
}
