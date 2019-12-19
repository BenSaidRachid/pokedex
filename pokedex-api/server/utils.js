const formatIdToNdex = id => {
    let ndex = String(id)
    for(let i = ndex.length; i < 3; i++) {
        ndex = 0 + ndex;
    }
    return ndex;
}

module.exports = {
    formatIdToNdex
}